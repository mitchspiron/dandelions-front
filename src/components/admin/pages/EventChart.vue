<template>
  <div class="col-lg-6 mb-4">
    <div id="users-chart" class="card border-0 shadow-lg">
      <div class="card-body">
        <h5 class="card-title text-center">Evénements</h5>
        <div class="d-flex justify-content-center">
          <apexchart
            width="450"
            type="area"
            :options="chartOptions"
            :series="series"
          ></apexchart>
        </div>
        <div class="col-4 border-0 m-auto">
          <div class="input-group">
            <span class="input-group-text bg-white" id="basic-addon1"
              ><i class="bi bi-calendar-week"></i
            ></span>
            <input
              type="text"
              class="form-control"
              placeholder="Exemple: 2022"
              aria-describedby="basic-addon1"
              v-model="year"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getAllCountEventByYear } from "../../../api/dashboard";
export default {
  name: "EventChart",
  components: {},
  data() {
    return {
      year: "",
      form: {
        year: new Date().getFullYear().toString(),
      },
      chartOptions: {
        xaxis: {
          categories: [
            "Jan",
            "Fev",
            "Mar",
            "Avr",
            "Mai",
            "Juin",
            "Jui",
            "Août",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
        },
        colors: ["#6a994e"],
      },
      series: [
        {
          name: "Evénement",
          data: [],
        },
      ],
    };
  },
  mounted() {
    this.fetch();
  },
  methods: {
    fetch() {
      getAllCountEventByYear(this.form.year).then((result) => {
        this.series[0].data = result.data[0].data;
      });
    },
  },
  watch: {
    year() {
      getAllCountEventByYear(this.year).then((result) => {
        this.series[0].data = result.data[0].data;
        if (this.year == "") {
          this.year = new Date().getFullYear().toString();
        }
      });
    },
  },
};
</script>
