import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-about-page',
  styleUrl: './about-page.css',
  template: `
    <h2>About</h2>

    <h2>for options</h2>

    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>$index</th>
          <th>$count</th>
          <th>$first</th>
          <th>$last</th>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        @for (name of names; track name) {

          <tr [style]="{'background-color': $first ? 'red' : 'white'}">
            <td>{{name}}</td>
            <td>{{ $index }}</td>
            <td>{{ ($index+1) + ' of ' + $count }}</td>
            <td>{{ $first }}</td>
            <td>{{ $last }}</td>
            <td>{{ $odd }}</td>
            <td>{{ $even }}</td>

          </tr>
        }

      </tbody>
    </table>


  `,
})
export class AboutPage {

  names = ["Alice", "Bob", "Carol", "Dan", "Eve", "Fred"]

}
