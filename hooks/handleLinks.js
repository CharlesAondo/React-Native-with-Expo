import { UrlServices } from '../components/UrlServices';
import * as WebBrowser from 'expo-web-browser';

export const handleLinks = (item) => {

      let url = '';
      if (item.pub_med_id === null || item.pub_med_id === 'null') {
            url = links.url;

      } else {
            //url = 'https://pubmed.ncbi.nlm.nih.gov/' + item.pub_med_id;

            url = UrlServices.pubMedURL() + item.pub_med_id;
      }
      console.log(url)

      WebBrowser.openBrowserAsync(url)

}
