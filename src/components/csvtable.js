import React, { Component } from 'react';
import { CsvToHtmlTable } from 'react-csv-to-table';
import axios from 'axios'
class Csvtable extends Component {

    constructor(props){
        super(props);
        this.state = {
          csvData: ''
        };
      }
      componentDidMount()
        {  
            this.handleFiles() 
        }
      async handleFiles (){

        const csv =`Updated On,State,Total Individuals Vaccinated,Total Sessions Conducted,Total Sites ,First Dose Administered,Second Dose Administered,Male(Individuals Vaccinated),Female(Individuals Vaccinated),Transgender(Individuals Vaccinated),Total Covaxin Administered,Total CoviShield Administered,Total Sputnik V Administered,AEFI,18-45 years (Age),45-60 years (Age),60+ years (Age),Total Doses Administered
        20/06/2021,India,225211708,12736409,24766,225211708,49806985,121366817,103804672,40219,33448885,241530408,39400,22319,73042655,86653713,65402486,275018693
        20/06/2021,Andaman and Nicobar Islands,121202,0,0,121202,15506,65192,56001,9,0,136708,0,3,28910,61413,30875,136708
        20/06/2021,Andhra Pradesh,11201229,3368484,2266,11201229,2739331,5146701,6052755,1773,2263984,11671021,5555,331,2541300,5499634,3158306,13940560
        20/06/2021,Arunachal Pradesh,400684,7300,41,400684,79636,219425,181134,125,0,480320,0,272,205824,140307,54482,480320
        20/06/2021,Assam,4294662,96606,373,4294662,1065723,2319607,1974357,698,1048723,4311662,0,196,1579068,1811814,903299,5360385
        20/06/2021,Bihar,11630826,1272921,2197,11630826,2049552,6436064,5192448,2314,1297687,12382691,0,201,4469114,3592438,3564700,13680378
        20/06/2021,Chandigarh,376354,10810,28,376354,77223,212636,163657,61,350,453227,0,139,168588,128012,79502,453577
        20/06/2021,Chhattisgarh,5192061,248472,1275,5192061,1188429,2538327,2653152,582,236184,6144306,0,564,471006,2960611,1760077,6380490
        20/06/2021,Dadra and Nagar Haveli and Daman and Diu,,,,,,,,,,,,,,,,0
        20/06/2021,Delhi,4953785,69187,122,4953785,1580008,2876076,2076706,1003,1982623,4550461,709,962,2099082,1779844,1070238,6533793
        20/06/2021,Goa,659181,69330,76,659181,101025,341948,317171,62,15908,744298,0,576,295356,205921,157778,760206
        20/06/2021,Gujarat,17278756,500558,1966,17278756,4820779,9468219,7807874,2663,2535203,19564332,0,1017,6602142,6126677,4545709,22099535
        20/06/2021,Haryana,6216032,275173,309,6216032,1151911,3440927,2773910,1195,1119998,6247944,1,872,2448506,1955358,1804548,7367943
        20/06/2021,Himachal Pradesh,2379678,5148,17,2379678,440320,1202274,1176922,482,413,2818085,1500,685,535737,1048509,794980,2819998
        20/06/2021,Jammu and Kashmir,3367528,249321,956,3367528,603195,1970058,1396836,634,80196,3890527,0,124,832799,1561777,972393,3970723
        20/06/2021,Jharkhand,4869438,536819,1593,4869438,909171,2661665,2206938,835,832575,4946034,0,783,1847507,1682587,1337467,5778609
        20/06/2021,Karnataka,15268722,1140306,3433,15268722,3229641,7911405,7354556,2761,1931696,16565201,1466,2556,4906306,5948661,4403122,18498363
        20/06/2021,Kerala,9719116,125141,331,9719116,2442433,4697169,5020309,1638,1078411,11083116,22,2414,2139319,3671773,3897187,12161549
        20/06/2021,Ladakh,161809,200,1,161809,37477,87200,74590,19,0,199286,0,4,94436,36914,30419,199286
        20/06/2021,Lakshadweep,44347,6520,10,44347,7160,23878,20466,3,0,51507,0,0,23326,13519,7502,51507
        20/06/2021,Madhya Pradesh,12965037,44624,189,12965037,2054780,7264881,5697697,2459,2012568,13007249,0,614,5610889,4144227,3204616,15019817
        20/06/2021,Maharashtra,22244712,588752,1625,22244712,5489262,12001847,10239649,3216,3440309,24292538,1127,4046,5692538,9179222,7356559,27733974
        20/06/2021,Manipur,493565,1843,12,493565,72145,273082,220334,149,0,565710,0,83,220684,175327,97318,565710
        20/06/2021,Meghalaya,515897,2160,4,515897,75075,269376,246460,61,0,590972,0,279,253492,183791,78552,590972
        20/06/2021,Mizoram,376032,0,0,376032,52654,188025,187958,49,0,428686,0,850,162811,130751,82379,428686
        20/06/2021,Nagaland,346298,35950,91,346298,53072,196111,150144,43,0,399370,0,39,190336,101355,54489,399370
        20/06/2021,Odisha,8037617,42524,107,8037617,1808515,4303135,3733024,1458,1151609,8694523,0,308,1942331,3335744,2757686,9846132
        20/06/2021,Puducherry,362503,73970,63,362503,56169,185578,176873,52,74,418598,0,19,174462,113219,74712,418672
        20/06/2021,Punjab,4565935,597208,1142,4565935,856952,2571915,1993461,559,532348,4890539,0,133,1222733,1889813,1452715,5422887
        20/06/2021,Rajasthan,17808082,805255,2644,17808082,3430094,9434942,8370102,3038,2194302,19043874,0,488,5677016,6344883,5775933,21238176
        20/06/2021,Sikkim,299524,1800,5,299524,59911,162455,136978,91,0,359435,0,226,148893,94319,56152,359435
        20/06/2021,Tamil Nadu,10429212,1174817,1532,10429212,2272203,5718152,4709615,1445,2144571,10556439,405,136,4590717,3532603,2302968,12701415
        20/06/2021,Telangana,7785158,583616,860,7785158,1388763,4068737,3714856,1565,1770763,7376481,26677,383,3087828,2910862,1781783,9173921
        20/06/2021,Tripura,1403613,287354,314,1403613,539093,727282,676133,198,24443,1918263,0,63,404567,655468,342780,1942706
        20/06/2021,Uttar Pradesh,21602698,70336,217,21602698,4024387,12438499,9158238,5961,3194980,22432105,0,1264,7073629,8589826,5929795,25627085
        20/06/2021,Uttarakhand,2821983,52463,226,2821983,734171,1464695,1356535,753,194170,3361984,0,298,897025,1056773,866973,3556154
        20/06/2021,West Bengal,14736671,385941,732,14736671,4274276,8294637,6439825,2209,2364785,16644224,1938,1304,4205886,5928402,4592780,19010947` 
        this.setState({
            csvData:csv
        }) 
      }
    render() {
        return (
            <div>
          
             <CsvToHtmlTable
             
                  data={this.state.csvData}
                  csvDelimiter=","
                  tableClassName="table table-striped table-hover"
              />
      </div>
        );
    }
}

export default Csvtable;