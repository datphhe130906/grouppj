function getRoom(){
	return document.getElementById('Room').value;
}
function getHouse(){
	return document.getElementById('House').value;
}
function getfloor(){
	return document.getElementById('floor').value;
}
function getONT01(){
	return document.getElementById('NONT1').value;
}
function getAnymore01(){
	return document.getElementById('Anymore').value;
}
/////////////////////////////////////////////////////////////////////////////////
var x;
function needGPON(House,Room,floor,NONT1,Anymore){

	document.getElementById('needGPON').value = (House*Room*floor*NONT1)+(Anymore/100)*(House*Room*floor*NONT1);
	x = (House*Room*floor*NONT1)+(Anymore/100)*(House*Room*floor*NONT1);

}
////////////////////////////////////////////////////////////////////////////////
var k,i,j;
var OLT,Spli,ONT;
// OLT //
function A1(obj,House,Room,floor)
            {	
				
                var value = obj.value;
				if (value === '1'){ //APTTEK//
					i=document.getElementById('SOLT').value=x/(8*k);
					OLT=document.getElementById('SSOLT').value=i*52900000;
                }
				else if (value === '2'){ //huawei//
					i=x/(64*k);
					OLT=i*92000000
					i=document.getElementById('SOLT').value=x/(16*k);
						OLT=document.getElementById('SSOLT').value=i*96000000;
                }
				else if (value === '3'){ //Nokia//
					i=x/(64*k);
					OLT=i*92000000
					i=document.getElementById('SOLT').value=x/(32*k);
						OLT=document.getElementById('SSOLT').value=i*80500000;
                }
				else if (value === '4'){ //Nokia//
					i=x/(64*k);
					OLT=i*92000000;
					i=document.getElementById('SOLT').value=x/(64*k);
					 	OLT=document.getElementById('SSOLT').value=i*92000000;
                }
				else{
					document.getElementById('SOLT').value=0;
				}
            }
//Splitter//
function A2(obj,House,Room,floor)
            {	
				
                var value = obj.value;
                if (value === '1'){ //APTTEK//
					k=32;
					document.getElementById('Splitter').value=x/k;
					Spli=document.getElementById('Splitter1').value=(x/k)*1380000;
                }
                else if (value === '2'){ //huawei//
					k=64;
					document.getElementById('Splitter').value=x/k;
					Spli=document.getElementById('Splitter1').value=(x/k)*2760000;
                }
				else{
					document.getElementById('Splitter').value=0;
				}
            }
//ONT//
function A3(obj,House,Room,floor)
            {	
				
                var value = obj.value;
                if (value === '1'){ //APTTEK//
					ONT=document.getElementById('SONT').value=x*120000;
                }
                else if (value === '2'){ //huawei//
					ONT=document.getElementById('SONT').value=x*275000;
                }
                else if (value === '3'){ //Nokia//
					ONT=document.getElementById('SONT').value=x*500000;
                }
				else if (value === '4'){ //Nokia//
					ONT=document.getElementById('SONT').value=x*5000000;
                }
				else{
					document.getElementById('SONT').value=0;
				}
            }
//Total//
function A4(){
	return document.getElementById('total').value=OLT+Spli+ONT;
}
