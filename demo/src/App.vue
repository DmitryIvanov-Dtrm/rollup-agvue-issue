<template>
  <div id="app">
    <h1>Rollup + Ag-Grid-Vue Issue</h1>
    <ag-grid-vue style="width: 100%; height: 350px;"
                 class="ag-theme-balham"
                 :rowData="rowData"
                 :columnDefs="columnDefs">
    </ag-grid-vue>
  </div>
</template>
<script>
    import { AgGridVue } from "@ag-grid-community/vue";

    export default {
      name: "LargeDataSetExample",
      data() {
        return {
          rowData: this.rowData,
          columnDefs: this.columnDefs,
        }
      },
      components: {
        'ag-grid-vue': AgGridVue
      },
      created() {
        this.rowData = [];
        for (let i = 0; i < 50000; i++) {
          this.rowData.push(Object.freeze({
            recordNumber: i,
            value1: Math.floor(Math.random() * 10000),
            value2: Math.floor(Math.random() * 10000),
            value3: Math.floor(Math.random() * 10000),
            value4: Math.floor(Math.random() * 10000),
            value5: Math.floor(Math.random() * 10000),
            value6: Math.floor(Math.random() * 10000),
            value7: Math.floor(Math.random() * 10000)
          }));
        }
        this.rowData = Object.freeze(this.rowData);
        this.columnDefs = Object.freeze([
          {headerName: 'Record', field: 'recordNumber'},
          {headerName: 'Value 1', field: 'value1'},
          {headerName: 'Value 2', field: 'value2'},
          {headerName: 'Value 3', field: 'value3'},
          {headerName: 'Value 4', field: 'value4'},
          {headerName: 'Value 5', field: 'value4'},
          {headerName: 'Value 6', field: 'value4'},
          {headerName: 'Value 7', field: 'value4'}
        ])
      }
    }
</script>
