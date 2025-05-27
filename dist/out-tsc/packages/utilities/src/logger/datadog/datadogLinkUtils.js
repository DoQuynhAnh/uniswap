// Below helpers copy/pasted from https://github.com/DataDog/dd-sdk-reactnative/blob/75a7d291ebe477a58e9d1239883b2b6b45d4117d/packages/react-native-apollo-client/src/helpers.ts
export const getOperationName = (operation) => {
    if (operation.operationName) {
        return operation.operationName;
    }
    return null;
};
const getOperationDefinitionNode = (definition) => {
    return definition.kind === 'OperationDefinition' && !!definition.operation;
};
export const getOperationType = (operation) => {
    try {
        return (operation.query.definitions.filter(getOperationDefinitionNode).map((operationDefinitionNode) => {
            return operationDefinitionNode.operation;
        })[0] || null);
    }
    catch (e) {
        return null;
    }
};
//# sourceMappingURL=datadogLinkUtils.js.map