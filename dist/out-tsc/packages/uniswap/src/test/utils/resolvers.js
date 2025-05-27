/* eslint-disable @typescript-eslint/no-explicit-any */
import cloneDeepWith from 'lodash/cloneDeepWith';
function isResolverWithResolve(resolver) {
    return typeof resolver === 'object' && resolver !== null && 'resolve' in resolver;
}
function isResolverFunction(resolver) {
    return typeof resolver === 'function';
}
export function queryResolvers(resolvers) {
    // Create a response object with functions to create and resolve promises
    const promiseResolvers = {};
    const resolved = Object.fromEntries(Object.keys(resolvers).map((key) => [key, new Promise((resolve) => (promiseResolvers[key] = resolve))]));
    return {
        resolved,
        resolvers: {
            Query: Object.fromEntries(Object.entries(resolvers).map(([k, resolver]) => {
                const key = k;
                const resolve = async (...params) => {
                    const [parent, args, context, info] = params;
                    const resolvedValue = isResolverWithResolve(resolver)
                        ? resolver.resolve(parent, args, context, info)
                        : isResolverFunction(resolver)
                            ? resolver(parent, args, context, info)
                            : null;
                    // TODO(WALL-5157): This was commented out because it breaks when using fragments.
                    //                  To fix it, we need to recursively filter nested fields when fragments are used.
                    // const updatedValue = await filterObjectFields(info.fieldNodes[0]?.selectionSet, resolvedValue)
                    // cloneDeepWith returns any type so we need to cast it manually
                    const resultObj = cloneDeepWith(resolvedValue, undefinedToNull);
                    // Resolve the corresponding promise
                    if (promiseResolvers[key]) {
                        promiseResolvers[key](resultObj);
                    }
                    return resultObj;
                };
                return [key, resolve];
            })),
        },
    };
}
/*
TODO(WALL-5157): see comment above. We commented this out because it breaks when using queries with fragments.

type Scalar = number | string | boolean | bigint | symbol | undefined

function isObject<T extends object | Scalar>(value: T): value is Exclude<T, Scalar> {
  return typeof value === 'object'
}

async function filterObjectFields<T extends object | Scalar>(
  selectionSet: SelectionSetNode | undefined,
  sourceValue: T | Promise<Maybe<ResolverTypeWrapper<T>>> | null,
): Promise<T | null> {
  // resolved source value can be a Promise or a plain value
  const source = await sourceValue

  if (!source || !selectionSet) {
    return source ?? null
  }

  if (Array.isArray(source)) {
    return Promise.all(source.map((obj) => filterObjectFields(selectionSet, obj))) as T
  }

  if (!isObject(source)) {
    return source
  }

  const result: Record<string, any> = {}

  for (const selection of selectionSet.selections) {
    if (selection.kind !== 'Field') {
      continue
    }

    const key = selection.name.value
    const value = source[key as keyof typeof source]

    if (value !== undefined && selection.selectionSet) {
      result[key] = await filterObjectFields(selection.selectionSet, value)
    } else {
      result[key] = value
    }
  }

  return result as T
}
*/
const undefinedToNull = (value) => (value !== null && value !== void 0 ? value : null);
//# sourceMappingURL=resolvers.js.map