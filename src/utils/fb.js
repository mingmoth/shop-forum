export const initialFB = () => {
  window.fbAsyncInit = function () {
    /* global FB */
    FB.init({
      appId: process.env.VUE_FB_ID,
      cookie: true,
      xfbml: true,
      version: "v12.0"
    });
    FB.AppEvents.logPageView();

    // Get FB Login Status
    FB.getLoginStatus(response => {
      console.log('res', response)
    })
  };
}