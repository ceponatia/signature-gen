

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

function copySignatureToClipboard() {
  var signatureHtml = document.getElementById('signature').innerHTML;

  // Create a temporary textarea element
  var tempTextArea = document.createElement('textarea');
  tempTextArea.value = signatureHtml;
  document.body.appendChild(tempTextArea);

  // Select and copy the content of the textarea
  tempTextArea.select();
  document.execCommand('copy');

  // Remove the temporary textarea
  document.body.removeChild(tempTextArea);

  console.log('Signature copied to clipboard');
}

function populateUnitSelect() {
    const unitSelect = document.getElementById('unit');
    const unitOptions = ['Prosecuting Attorney', 'Administrative Coordinator', 'Animal Cruelty', 'Appeals and Paroles', 'Auto Theft', 'Chief Assistant', 'Chief of Operations', 'Chief of Special Prosecutions', 'Chief of Trials and Courts', 'Child Protection/CSC', 'Circuit Court', 'Circuit Support', 'Cold Cases', 'Communications Director', 'Communications', 'Contract Employee', 'Conviction Integrity', 'Cooperative Reimbursement', 'Discovery', 'District Court', 'Domestic Violence', 'Drug Unit', 'Environmental', 'Executive Administrative Assistant', 'Forfeitures', 'Hate Crimes', 'Human Trafficking', 'Information Technology', 'Intern', 'Intern Coordinator', 'Internet', 'Investigator', 'Juvenile', 'Major Crimes Unit', 'Office Assistant', 'Office Manager', 'Outreach Coordinator', 'Paralegal', 'Probate/Mental Health', 'Prosecuting Attorney', 'Redirect - FAN', 'Senior Crimes and Consumer Protection', 'Victim Witness Advocate', 'Warrant Appeals', 'Warrant and Extraditions'];

    // Populate the select element with options
    unitOptions.forEach(option => {
        const optionElement = document.createElement('option');
        optionElement.value = option;
        optionElement.textContent = option;
        unitSelect.appendChild(optionElement);
    });
}

// Call the populateUnitSelect function to populate the "unit" dropdown
populateUnitSelect();

// Find the button element
const copyButton = document.getElementById('copyButton');

// Add click event listener to the button
copyButton.addEventListener('click', () => {
    const textToCopy = document.getElementById('signature').value;
    copyToClipboard(signature);
});

function generateSignature() {
    var fullName = document.getElementById("fullName").value;
    var pNumber = document.getElementById("pNumber").value;
    // if they entered 'P', remove it since it's already included in the HTML
    if (pNumber !== "") {
        if (pNumber.charAt(0).toUpperCase() === 'P') {
            pNumber = pNumber.slice(1);
        }

        // handle typos
        if (!/^\d{5}$/.test(pNumber)) {
            alert("Please enter exactly 5 digits for your P Number.");
            return; // Stop execution of the function
        }
    }
    var unit = document.getElementById("unit").value;
    var workCell = document.getElementById("workCell").value;
    var deskPhone = document.getElementById("deskPhone").value;
    var fax = document.getElementById("fax").value;
    var email = document.getElementById("email").value;

    workCell = formatPhoneNumber(workCell);
    deskPhone = formatPhoneNumber(deskPhone);
    fax = formatPhoneNumber(fax);

    var signature = `
    <div>
    <strong>${fullName}${pNumber ? " (P" + pNumber + ")" : ""}${pNumber ? "<br>Assistant Prosecuting Attorney" : ""}</strong><br>
      ${unit ? unit + "<br>" : ""}
      Macomb County Prosecutor's Office<br>
      One South Main - 4th Floor<br>
      Mount Clemens, MI 48043-2306<br><br>
  
      ${workCell ? "Work cell phone: " + workCell + "<br>" : ""}
      Desk phone: ${deskPhone}<br>
      Fax: ${fax}<br><br>
  
      E-mail: <a href="mailto:${email}">${email}</a><br>
      Web: <a href="https://prosecutor.macombgov.org/Prosecutor-Home">https://prosecutor.macombgov.org/Prosecutor-Home</a><br><br>
  
      <strong>PRIVACY NOTICE:</strong> This electronic mail transmission from the Macomb County Prosecutor's Office, and any attachments, are intended only for the individual or entity to which it is addressed. It may contain privileged, confidential information, which is exempt from disclosure under applicable laws. In some instances, this email communication may be subject to disclosure under the Michigan Freedom of Information Act or other applicable laws.<br><br>
  
      If you are not the intended recipient, please note that you are strictly prohibited from disseminating or distributing this information (other than to the intended recipient) or copying this information. If you are not the intended recipient, please notify me immediately by e-mail or by telephone at ${workCell} and delete the email and any attachments from your system. Unauthorized disclosure or use of this information may be a violation of state and federal laws.<br><br>
  
      This message has been prepared on resources provided by the Macomb County Prosecutor's Office and is subject to the terms and conditions of Macomb County's applicable policies.
    </div>`;

    document.getElementById("signature").innerHTML = signature;
    document.getElementsByClassName("card")[0].style.display = "block";
    var copyButton = document.getElementById("copyButton");
    copyButton.style.display = "block";
}
