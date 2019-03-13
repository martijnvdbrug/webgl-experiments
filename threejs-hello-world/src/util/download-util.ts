import { Object3D, Scene } from 'three';
import * as GLTFExporter from 'three-gltf-exporter';

export class DownloadUtil {

  static async downloadScene(inputs: Object3D[]) {
    const content = await DownloadUtil.exportGLTF(inputs);
    DownloadUtil.startDownload(content, 'scene.gltf');
  }

  private static async exportGLTF(inputs: Object3D[]): Promise<string> {
    return new Promise(((resolve, reject) => {
      const exp = new GLTFExporter();
      exp.parse(inputs, function (result) {
        console.log(result);
        resolve(result);
      });
    }));
  }

  private static startDownload(exportObj, exportName){
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(exportObj));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href",     dataStr);
    downloadAnchorNode.setAttribute("download", exportName);
    document.body.appendChild(downloadAnchorNode); // required for firefox
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  }

}