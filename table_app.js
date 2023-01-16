new Vue({
	el: "#app",
	created: function () {
		console.log("hi");
		this.create_table_data();
		this.col_width_calc();
		this.row_height_calc();
	},
	data: function () {
		return {
			selected_cells: [],
			selected_col_index: 0,
			selected_row_index: 0,
			row: 5,
			col: 5,
			col_widths: [],
			row_heights: [],
			table_schema: {
				data: [],
			},
		};
	},
	watch: {
		table_schema: {
			handler: function (newV) {},
			deep: true,
		},
		col: function () {
			this.create_table_data();
			this.col_width_calc();
		},
		row: function () {
			this.create_table_data();
			this.col_width_calc();
		},
	},
	methods: {
		create_table_data: function () {
			let rows = [];
			for (let row = 0; row < this.row; row++) {
				let temp_row = [];
				for (let col = 0; col < this.col; col++) {
					let temp_col = {
						id: `row_${row}_col_${col + 1}`,
						colspan: 1,
						rowspan: 1,
						text: "",
					};

					temp_row.push(temp_col);
				}
				rows.push(temp_row);
			}
			this.table_schema.data = [...rows];
			console.log(this.table_schema.data);
		},
		col_width_calc: function () {
			let temp_width = [];
			for (let index = 0; index < +this.col + 1; index++) {
				temp_width.push(120);
			}
			this.col_widths = [...temp_width];
		},
		row_height_calc: function () {
			let temp_height = [];
			for (let index = 0; index < +this.row + 1; index++) {
				temp_height.push(35);
			}
			this.row_heights = [...temp_height];
		},
        cell_mousedown: function (e, row_index, col_index) {
			if (e.button == 0 && e.ctrlKey) {
				console.log("is Left Click");
				console.log(row_index, col_index);
				console.log(row_index + 1, col_index + 1);
                e.target.classList.add('selected')
			} else if (e.button == 2 && e.ctrlKey) {
				console.log("is Right Click");
			}else if(e.button == 0 && !e.ctrlKey){
                $('.cell_table_cols').removeClass('selected')
                e.target.classList.add('selected')
            }
		},
	},
	computed: {
		table_width: function () {
			return this.col_widths.reduce((t, i) => (t += +i), 0);
		},
	},
});
