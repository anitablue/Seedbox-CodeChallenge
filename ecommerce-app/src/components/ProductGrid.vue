<template>
  <div>
      <Grid
          ref="grid"
          :style="{ height: 'auto' }"
          :data-items="result"
          :sortable="true"
          :sort="sort"
          :filterable="true"
          :filter="filter"
          :pageable="true"
          :skip="skip"
          :take="take"
          :columns="columns"
          @sortchange="sortChangeHandler"
          @filterchange="filterChangeHandler"
          @pagechange="pageChangeHandler"
          @itemchange="itemChange"
      >
      <template v-slot:orderTemplate="{}" v-if="isCustomer">
        <div class="row px-3 py-3">
          <div class="col">
            <button href="#" class="btn btn-secondary">Add to order</button>
          </div>
        </div>
                    
        </template>
      </Grid>
  </div>    
</template>

<script>
import '@progress/kendo-theme-default/dist/all.css';
import { Grid } from '@progress/kendo-vue-grid';
import { process } from '@progress/kendo-data-query';

export default {
    components:{
        Grid
    },
    props:{
        products:{
            type: Array,
            default: undefined,
        }
    },
    data() {
      return {
        content: "Ecommerce",
        sort: null,
        filter: null,
        skip: 0,
        take: 5,
        columns: [
            { field: '_id', title: 'ID', hidden: true},
            { field: 'name', title: 'Name'},
            { field: 'companyName', title: 'Company name' },
            { field: 'location', title: 'Location' },
            { field: 'distance', title: 'Distance' },
            { field: 'price', title: 'Price' },
            { field: 'amount', title: 'Amount' },
            { field: 'unit', title: 'Unit' },
           
        ],
      };
    },
    computed: {
      result: {
        get: function () {
          return process(this.products, {
            sort: this.sort,
            filter: this.filter,
            take: this.take,
            skip: this.skip,
          });
        },
      },
      currentUser() {
        return this.$store.state.auth.user;
      },
      isCustomer() {
        return (this.currentUser && this.currentUser.data.loginastype == 'Customer');
      },
    },
    created(){
      if(this.isCustomer){
        this.columns.push( { cell: 'orderTemplate', filterable: false, width: '220px' });
      }
    },
    methods:{
        itemChange: function (e) {
        const data = this.gridData.slice();
        const index = data.findIndex((d) => d._id === e.dataItem._id);
        data[index] = { ...data[index], [e.field]: e.value };
        this.gridData = data;
        if (event.dataItem) {
            event.dataItem[e.field] = e.value;
        }
        },
        sortChangeHandler(event) {
        this.sort = event.sort;
        },
        filterChangeHandler(event) {
        this.filter = event.filter;
        },
        pageChangeHandler(event) {
        this.take = event.page.take;
        this.skip = event.page.skip;
        },
        addToOrder(){

        }
    },
  
}
</script>