import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NgxJsonViewerService {
  onNodeClick = new Subject();
  results: any = [];

  setSelectedNode(node: any) {
    this.onNodeClick.next(node);
  }

  // https://github.com/douglascrockford/JSON-js/blob/master/cycle.js
  decycle(object: any) {
    const objects = new WeakMap();
    return (function derez(value, path, parentPath = null) {
      let old_path;
      let nu: any;

      if (
        typeof value === 'object'
        && value !== null
        && !(value instanceof Boolean)
        && !(value instanceof Date)
        && !(value instanceof Number)
        && !(value instanceof RegExp)
        && !(value instanceof String)
      ) {
        old_path = objects.get(value);
        if (old_path !== undefined) {
          return { $ref: old_path };
        }
        objects.set(value, path);

        if (Array.isArray(value)) {
          nu = [];
          value.forEach(function (element, i) {
            nu[i] = derez(element, path + '[' + i + ']', parentPath);
          });
        } else {
          nu = {};
          Object.keys(value).forEach(function (name) {
            nu[name] = derez(
              value[name],
              path + '[' + JSON.stringify(name) + ']',
              parentPath ? (parentPath + '/' + name) as any : name
            );
          });
          nu.parentPath = parentPath;
        }
        return nu;
      }
      return value;
    }(object, '$'));
  }
}