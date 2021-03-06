angular.module("socially").directive('resetpw', function() {
  return {
    restrict: 'E',
    templateUrl: 'client/user/reset-password/reset-password.html',
    controllerAs: 'resetpw',
    controller: function ($scope, $reactive, $state) {
      $reactive(this).attach($scope);
 
      this.credentials = {
        email: ''
      };
 
      this.error = '';
 
      this.reset = () => {
        Accounts.forgotPassword(this.credentials, (err) => {
          if (err) {
            Bert.alert(  err.message, 'warning');
          }
          else {
            Bert.alert(  'Reset password link sent your mail.', 'info');
            $state.go('parties');
          }
        });
      };
    }
  }
});