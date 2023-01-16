let data = [
	["বিষয়", "", "সাংঠনিক স্তর\n"],
	["", "", "শাখা ", "থানা", "ওয়ার্ড/ইউনিয়ন", "উপশাখা"],
	["বিভিন্ন\nসাংগঠনিক\nস্তরের\nপাঠাগার\nসংক্রান্ত", "পাঠাগার সংখা", "input", "input", "input", "input"],
	["", "মোট বই সংখ্যা", "input", "input", "input", "input"],
	["", "কতটি পাঠাগারে বইয়ের তালিকা আছে", "input", "input", "input", "input"],
	["", "কতটি পাঠাগারে ঠিক মত রেজিষ্টার সংরক্ষণ হয়", "input", "input", "input", "input"],
	["মসজিদ\nপাঠাগার", "মসজিদ সংখ্যা", "input", "input", "input", "input"],
	["", "পাঠাগার সংখা", "input", "input", "input", "input"],
	["রিকশা পাঠাগার", " প্রতিষ্ঠার টার্গেট কতটি", "input", "input", "input", "input"],
	["", "পাঠাগার দশকে কতটি রিকশা পাঠাগারে প্রতিষ্ঠা করা হয়েছে", "input", "input", "input", "input"],
	["ব্যাক্তিগত\nপাঠাগার\r\nসংক্রান্ত", "জনশক্তির মান", "সদস্য", "সাথী", "", "কর্মী"],
	["", "সংখ্যা", "input", "input", "input", "input"],
	["", "ব্যক্তিগত পাঠাগার আছে কতজনের", "input", "input", "input", "input"],
	["", "দশকে পাঠাগার বৃদ্ধি করেছেন কতজন", "input", "input", "input", "input"],
	["অনলাইন\nলাইব্রেরির\nপ্রচারণা\nসংক্রান্ত", "আইটেম", "স্টিকার\nলাগানো", "স্টিকার বিতরণ", "", "অনলাইনে\nপ্রচারণা\nকরেছেন \nকতজন"],
	["", "সংখ্যা", "input", "input", "input", "input"],
];

let depth = 1;
let html = `
    <table class="table table-bordered text-center">
`;

data.forEach((i) => {
	for (let index = 0; index < i.length; index++) {
		if (i.length > depth) {
			depth = i.length;
			break;
		}
	}
});

const check_next_gap = (current_index, arr, depth) => {
	// console.log(current_index, arr, depth);
	let next_gaps = 0;
	for (let index = current_index; index < arr.length; index++) {
		if (!arr[index]) {
			next_gaps++;
			console.log("index: " + index + " gap:" + next_gaps);
		}
	}

	if (current_index + 1 == arr.length) {
		for (let i = current_index; i < depth - 1; i++) {
			next_gaps++;
			console.log("i: " + i);
		}
	}

	return next_gaps;
};

for (let i = 0; i < data.length; i++) {
	html += `<tr>`;
	for (let index = 0; index < depth; index++) {
		let col_span = 0;

		if (!data[i][index + 1]) {
			col_span = check_next_gap(index, data[i], depth);
			if(data[index]){
				// col_span++;
				console.log('data: '+data[i]+' gap: '+col_span);
			}
		}

		html += `<td colspan="${col_span}" style="vertical-align:middle;">`;

		if (data[i][index] != "input") {
			html += `${data[i][index] || ""} `;
		}

		if (data[i][index] == "input") {
			html += `<input class="form-control text-center border-0" value="${data[i][index]}" />`;
		}

		html += `</td>`;

		if (col_span) {
			index += col_span - 1;
		}
	}
	html += `</tr>`;
	// if (i == 2) break;
}

html += `</table>`;

output.innerHTML = html;

let test = ["", "", "শাখা ", "থানা", "ওয়ার্ড/ইউনিয়ন", "উপশাখা"];
console.log(check_next_gap(0, test, 6));
