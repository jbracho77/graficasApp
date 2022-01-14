import { Component, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';
import { GraficasService } from '../../services/graficas.service';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [
  ]
})
export class DonaHttpComponent implements OnInit {

  // Doughnut
  public colores: string[] = [
    '#6405F0', '#0724E3',  '#05A0F0', '#FF4830', '#D12CE8', '#B8E820', '#24FF65'
  ];

  public doughnutChartData: ChartData<'doughnut'> = {
    datasets: [ ]
  };

  public doughnutChartType: ChartType = 'doughnut';
  
  constructor( private graficasService: GraficasService) { }

  ngOnInit(): void {

    // this.graficasService.getCantidadUsuarios()
    //   .subscribe( data => {
    //     console.log(data);
    //     const labels = Object.keys( data );
    //     const valores = Object.values( data );

    //     this.doughnutChartData.labels = labels;
    //     this.doughnutChartData.datasets.push({ 
    //       data: valores,
    //       backgroundColor: this.colores
    //     })
    

    //   });

    this.graficasService.getUsuariosDonaData()
      .subscribe( ({ labels, values }) => {
        this.doughnutChartData.labels = labels;
        this.doughnutChartData.datasets.push({ 
          data: values,
          backgroundColor: this.colores
        })

      })

  }

}
