({
	init : function(cmp, event, helper) {
		 var action = cmp.get("c.getOwnerDetail");
        action.setParams({ recordId : cmp.get("v.recordId"), objectAPIName : cmp.get("v.objectAPIName") });

        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
           		cmp.set("v.ownerDetail", response.getReturnValue());    
            }
            else if (state === "INCOMPLETE") {
               
            }
            else if (state === "ERROR") {
                var errors = response.getError();
                if (errors) {
                    if (errors[0] && errors[0].message) {
                        console.log("Error message: " + 
                                 errors[0].message);
                    }
                } else {
                    console.log("Unknown error");
                }
            }
        });

        $A.enqueueAction(action);
	}
})
