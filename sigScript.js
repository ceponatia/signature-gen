function formatPhoneNumber(number) {
    number = number.replace(/\D/g, ''); // remove all non-digit characters
    if (number.length === 7) {
        return '586-' + number.slice(0, 3) + '-' + number.slice(3);
    } else if (number.length === 10) {
        return number.slice(0, 3) + '-' + number.slice(3, 6) + '-' + number.slice(6);
    } 
    // return original number if it doesn't match any format
    return number;
}

function generateSignature() {
    var fullName = document.getElementById("fullName").value;
    var pNumber = document.getElementById("pNumber").value;
    // if they entered 'P', remove it since it's already included in the HTML
    if (pNumber.charAt(0).toUpperCase() === 'P') {
        pNumber = pNumber.slice(1);
    }

    // handle typos
    if (!/^\d{5}$/.test(pNumber)) {
        alert("Please enter exactly 5 digits for your P Number.");
        return; // Stop execution of the function
    }
    var unit = document.getElementById("unit").value;
    var workCell = document.getElementById("workCell").value;
    var deskPhone = document.getElementById("deskPhone").value;
    var fax = document.getElementById("fax").value;
    var email = document.getElementById("email").value;

    workCell = formatPhoneNumber(workCell);
    deskPhone = formatPhoneNumber(deskPhone);

    var signature = `
    <div>
      <strong>${fullName} (P${pNumber})</strong><br>
      Assistant Prosecuting Attorney<br>
      ${unit}<br>
      Macomb County Prosecutor's Office<br>
      One South Main - 4th Floor<br>
      Mount Clemens, MI 48043-2306<br><br>
  
      Work cell phone: ${workCell}<br>
      Desk phone: ${deskPhone}<br>
      Fax: ${fax}<br><br>
  
      E-mail: <a href="mailto:${email}">${email}</a><br>
      Web: <a href="https://prosecutor.macombgov.org/Prosecutor-Home">https://prosecutor.macombgov.org/Prosecutor-Home</a><br><br>
  
      <strong>PRIVACY NOTICE:</strong><div id="privacyText">This electronic mail transmission from the Macomb County Prosecutor's Office, and any attachments, are intended only for the individual or entity to which it is addressed. It may contain privileged, confidential information, which is exempt from disclosure under applicable laws. In some instances, this email communication may be subject to disclosure under the Michigan Freedom of Information Act or other applicable laws.<br><br>
  
      If you are not the intended recipient, please note that you are strictly prohibited from disseminating or distributing this information (other than to the intended recipient) or copying this information. If you are not the intended recipient, please notify me immediately by e-mail or by telephone at ${workCell} and delete the email and any attachments from your system. Unauthorized disclosure or use of this information may be a violation of state and federal laws.<br><br>
  
      This message has been prepared on resources provided by the Macomb County Prosecutor’s Office and is subject to the terms and conditions of Macomb County’s applicable policies.</div>
    </div>`;

    document.getElementById("signature").innerHTML = signature;
    document.getElementsByClassName("card")[0].style.display = "block";
}