/*Add the JavaScript here for the function billingFunction().  It is responsible for setting and clearing the fields in Billing Information */
function billingFunction(checked) 
{  
          if (document.getElementById('same').checked)
          {  
                    document.getElementById('billingName').style.display="inline";
                    document.getElementById('billingZip').style.display="inline";        
                    document.getElementById('billingName').value = document.getElementById('shippingName').value;   
                    document.getElementById('billingZip').value = document.getElementById('shippingZip').value; 
          } 
        else 
          {  
                    document.getElementById('billingName').value = '';   
                    document.getElementById('shipZip').value = '';    
          } 
        
}