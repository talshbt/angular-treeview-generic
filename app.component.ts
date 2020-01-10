import { Component, Inject, ViewChild } from '@angular/core';
import { TreeViewComponent} from '@syncfusion/ej2-angular-navigations';
/**
 * Default TreeView Component
 */
@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html'
})
export class AppComponent {
    @ViewChild ('tree') tree: TreeViewComponent;
public data = [
  {NodeId: 1, NodeText: 'Music', Nodechild: [{NodeId: '01-01', NodeText: 'Gouttes.mp3'}]},
     {NodeId: '02', NodeText: 'Videos',
            Nodechild: [
                {NodeId: '02-01', NodeText: 'Naturals.mp4'},
                {NodeId: '02-02', NodeText: 'Wild.mpeg'}
        ]
        },
]
   public field:Object ={ dataSource: this.data, id: 'NodeId', text: 'NodeText', child: 'Nodechild' };

   public onCreate(){  
     var proxy = this;
     document.getElementById('btn').addEventListener('click', function(){ debugger
          proxy.tree.fields.dataSource= window.treeData;
          document.getElementById('text').innerHTML = 'TreeView with XML data'
     })
     
   }
}