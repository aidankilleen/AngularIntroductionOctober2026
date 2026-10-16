import { Component } from '@angular/core';
import { Highlight } from '../highlight';

@Component({
  imports: [Highlight],
  selector: 'app-directive-investigation-page',
  styleUrl: './directive-investigation-page.css',
  template: `
    <h2>Directive Investigation</h2>


    <div appHighlight="red">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis nam provident atque, hic explicabo nesciunt, laborum nulla minus cum nisi numquam, dolore cupiditate maiores incidunt omnis commodi? At, pariatur et?</div>


    <div appHighlight="yellow">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi qui in sapiente facilis illum veniam magni sed. Nihil recusandae libero odio sequi repudiandae voluptate architecto ullam voluptatem, in ratione. Quod!</div>

    <div appHighlight>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque sed commodi et. Voluptatum ducimus eos perferendis beatae voluptates, sed, illo corporis sapiente quia magni molestias, dolorum eligendi reprehenderit iure excepturi.</div>
    <button appHighlight>Press Me</button>
  `,
})
export class DirectiveInvestigationPage {}
