document.getElementById("contactForm").addEventListener("submit", function (e) {

		const fullname = document.getElementById("name").value.trim();
		const namePattern = /^[A-Za-z\s]+$/;

		if (fullname.length < 5) {
			alert("Full name must contain at least 5 characters.");
			e.preventDefault();
			return;
		}

		if (!namePattern.test(fullname)) {
			alert("Full name must contain only letters and spaces.");
			e.preventDefault();
			return;
		}

		const email = document.getElementById("email").value.trim();
		const emailPattern = /^[a-zA-Z0-9._%+-]+@e-uvt.ro$/;

		if (!emailPattern.test(email)) {
			alert("Email must be valid and end with @e-uvt.ro");
			e.preventDefault();
			return;
		 }

		const phone = document.getElementById("phone").value.trim();
		const phonePattern = /^07[0-9]+$/;

		if (!phonePattern.test(phone)) {
			alert("The phone number must contain only digits and start with 07.");
			e.preventDefault();
			return;
		}

		if (phone.length != 10) {
			alert("The phone number must contain exactly 10 digits.");
			e.preventDefault();
			return;
		}
        const date = new Date(document.getElementById("dob").value.trim());
        const today = new Date();
        let age1 = today.getFullYear() - date.getFullYear();
        if (age1 < 18){
            alert("You must be at least 18 years old.");
            e.preventDefault();
            return;
        }
        const age2 = document.getElementById("age").value.trim();
        if (age2 < 18 || age2 > 60){
            alert("You must be between 18 and 60 years old.")
            e.preventDefault();
            return;
        }
        const website = document.getElementById("website").value.trim();
        const websitePattern = /^https:\/\/.+/;
        if(!websitePattern.test(website)){
            alert("The url must start with https:// .");
            e.preventDefault();
            return;
        }
        const fileUp = document.getElementById("fileUpload");
        const file = fileUp.files[0];
        if (file){
            const type = ["application/pdf", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];
            if (!type.includes(file.type)){
                alert("The file must be PDF or Word.");
                e.preventDefault();
                return;
            }
            if (file.size > 2 * 1024 * 1024){
                alert("The file size must not exceed 2MB.");
                e.preventDefault();
                return;
            }
        } else {
            alert("You must upload a file");
            e.preventDefault();
            return;
        }
        const color = document.getElementById("favColor").value.trim();
        if(!color){
            alert("You must chose a color.");
            e.preventDefault();
            return;
        }

	});