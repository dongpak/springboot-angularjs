/**
 * 
 */
var messagingApp = angular.module('messagingApp', []);
messagingApp.controller('MessagingController', ['$scope', '$http', '$interval', '$injector', function($scope, $http, $interval, $injector) {
        var messages = this;
     
        messages.lastTimestamp	= 0;
        messages.activateCheck 	= false;
        
        messages.enableCheck = function() {
        	$interval(function () {
        		$http.get('api/messaging?timestamp='+messages.lastTimestamp).then(function(response) {
        			response.data.forEach(function(item) {
        				var mstamp = item.timestamp;
        				
        			    if (messages.lastTimestamp < mstamp) {
        			    	messages.lastTimestamp = mstamp
        			    }
        			    
        			    messages.messageArea += item.name;
        			    messages.messageArea += " ==> ";
        			    messages.messageArea += item.message;
        			    messages.messageArea += "\n";
        			    
        			    var textarea = document.getElementById('message-area');
        	        	textarea.scrollTop = textarea.scrollHeight;
        			});
        			messages.lastTimestamp += 1;
                });
            
        	}, 1000);
        }
        
        messages.addMessage = function() {
        	
        	if (messages.messageArea == null) {
        		messages.messageArea = "";        		
        	}
        	
        	var msgBody = {
        			"name": messages.yourName,
        			"message": messages.newMessage
        	}
        	$http.post('api/messaging', msgBody).then(function(response) {
        		if (messages.lastTimestamp == 0) {
        			messages.lastTimestamp = response.data.timestamp;
        		}
            });
        	
        	messages.newMessage = '';
        	
        	if (messages.activateCheck == false) {
        		messages.enableCheck();
        		messages.activateCheck = true;
        	}
        };
   }
]);

