export const initialFB = () => {
  window.fbAsyncInit = function () {
    /* global FB */
    FB.init({
      appId: 751346746252523,
      cookie: true,
      xfbml: true,
      version: "v11.0"
    });
    FB.AppEvents.logPageView();

    // Get FB Login Status
    FB.getLoginStatus(response => {
      console.log('res', response)
    })
  };
}