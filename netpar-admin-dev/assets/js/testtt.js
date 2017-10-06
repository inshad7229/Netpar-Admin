if ('undefined' !== typeof module) {
      // Load the Google Transliterate API
module.exports = function initDemo(){
  alert('in js')
      google.load("elements", "1", {
            packages: "transliteration"
          });

      // function onLoad() {
      //   var options = {
      //       sourceLanguage:
      //           google.elements.transliteration.LanguageCode.ENGLISH,
      //       destinationLanguage:
      //           [google.elements.transliteration.LanguageCode.HINDI],
      //       shortcutKey: 'ctrl+g',
      //       transliterationEnabled: true
      //   };

      //   // Create an instance on TransliterationControl with the required
      //   // options.
      //   var control =
      //       new google.elements.transliteration.TransliterationControl(options);

      //   // Enable transliteration in the textbox with id
      //   // 'transliterateTextarea'.
      //   control.makeTransliteratable(['transliterateTextarea']);
      // }
      // google.setOnLoadCallback(onLoad);
  }
}