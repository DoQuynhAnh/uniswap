import i18n from 'i18next';
let changingTo = '';
export async function changeLanguage(locale) {
    if (i18n.language === locale || locale === changingTo) {
        return;
    }
    // since its async we need to "lock" while its changing
    changingTo = locale;
    await i18n.changeLanguage(locale);
    i18n.emit('');
    changingTo = '';
}
//# sourceMappingURL=changeLanguage.js.map