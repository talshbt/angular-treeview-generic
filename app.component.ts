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



    @ViewChild ('tree',{static:false}) tree: TreeViewComponent;



    


   public field:Object ={ dataSource: window.treeData, id: 'NodeId', text: 'NodeText', child: 'Nodechild' };

  //  public onCreate(){  
  //    var proxy = this;
  //    document.getElementById('btn').addEventListener('click', function(){ debugger
  //         proxy.tree.fields.dataSource= window.treeData;
  //         document.getElementById('text').innerHTML = 'TreeView with XML data'
  //    })
     
  //  }
}