/**
 * Created by hxsd on 2016/6/7.
 */
//注册控制器
angular.module("loveAmoy").controller("LoveAmoyCtrl", function ($scope,$ionicSlideBoxDelegate,$state) {
    $scope.swipeLeft = function () {
        if( $ionicSlideBoxDelegate.currentIndex() == $ionicSlideBoxDelegate.slidesCount()-1){
            $state.go("tabs.home");
        }
    }
});