import React, { Component } from 'react';
import { forwardRef } from 'react';
import axios from 'axios'
import MaterialTable from "material-table";
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import '../styles/Vaccination.css';
import { makeStyles } from "@material-ui/core";
import { Footer } from './Footer';
import Csvtable from './csvtable';

class VaccinationTable extends Component {
     constructor()
     {
         super()
        this.state={
            sdata:[],
            dt:""
        }
     }
componentDidMount()
{
   
   this.getData()
  
}
async getData(){
  //const csv=await axios.get('https://api.covid19india.org/csv/latest/state_wise.csv');
const res=[
  {
    "Updated On": "20/06/2021",
    "State": "India",
    "Total Individuals Vaccinated": 225211708,
    "Total Sessions Conducted": 12736409,
    "Total Sites": 24766,
    "First Dose Administered": 225211708,
    "Second Dose Administered": 49806985,
    "Male(Individuals Vaccinated)": 121366817,
    "Female(Individuals Vaccinated)": 103804672,
    "Transgender(Individuals Vaccinated)": 40219,
    "Total Covaxin Administered": 33448885,
    "Total CoviShield Administered": 241530408,
    "Total Sputnik V Administered": 39400,
    "AEFI": 22319,
    "18-45 years (Age)": 73042655,
    "45-60 years (Age)": 86653713,
    "60+ years (Age)": 65402486,
    "Total Doses Administered": 275018693
  },
  {
    "Updated On": "20/06/2021",
    "State": "Andaman and Nicobar Islands",
    "Total Individuals Vaccinated": 121202,
    "Total Sessions Conducted": 0,
    "Total Sites": 0,
    "First Dose Administered": 121202,
    "Second Dose Administered": 15506,
    "Male(Individuals Vaccinated)": 65192,
    "Female(Individuals Vaccinated)": 56001,
    "Transgender(Individuals Vaccinated)": 9,
    "Total Covaxin Administered": 0,
    "Total CoviShield Administered": 136708,
    "Total Sputnik V Administered": 0,
    "AEFI": 3,
    "18-45 years (Age)": 28910,
    "45-60 years (Age)": 61413,
    "60+ years (Age)": 30875,
    "Total Doses Administered": 136708
  },
  {
    "Updated On": "20/06/2021",
    "State": "Andhra Pradesh",
    "Total Individuals Vaccinated": 11201229,
    "Total Sessions Conducted": 3368484,
    "Total Sites": 2266,
    "First Dose Administered": 11201229,
    "Second Dose Administered": 2739331,
    "Male(Individuals Vaccinated)": 5146701,
    "Female(Individuals Vaccinated)": 6052755,
    "Transgender(Individuals Vaccinated)": 1773,
    "Total Covaxin Administered": 2263984,
    "Total CoviShield Administered": 11671021,
    "Total Sputnik V Administered": 5555,
    "AEFI": 331,
    "18-45 years (Age)": 2541300,
    "45-60 years (Age)": 5499634,
    "60+ years (Age)": 3158306,
    "Total Doses Administered": 13940560
  },
  {
    "Updated On": "20/06/2021",
    "State": "Arunachal Pradesh",
    "Total Individuals Vaccinated": 400684,
    "Total Sessions Conducted": 7300,
    "Total Sites": 41,
    "First Dose Administered": 400684,
    "Second Dose Administered": 79636,
    "Male(Individuals Vaccinated)": 219425,
    "Female(Individuals Vaccinated)": 181134,
    "Transgender(Individuals Vaccinated)": 125,
    "Total Covaxin Administered": 0,
    "Total CoviShield Administered": 480320,
    "Total Sputnik V Administered": 0,
    "AEFI": 272,
    "18-45 years (Age)": 205824,
    "45-60 years (Age)": 140307,
    "60+ years (Age)": 54482,
    "Total Doses Administered": 480320
  },
  {
    "Updated On": "20/06/2021",
    "State": "Assam",
    "Total Individuals Vaccinated": 4294662,
    "Total Sessions Conducted": 96606,
    "Total Sites": 373,
    "First Dose Administered": 4294662,
    "Second Dose Administered": 1065723,
    "Male(Individuals Vaccinated)": 2319607,
    "Female(Individuals Vaccinated)": 1974357,
    "Transgender(Individuals Vaccinated)": 698,
    "Total Covaxin Administered": 1048723,
    "Total CoviShield Administered": 4311662,
    "Total Sputnik V Administered": 0,
    "AEFI": 196,
    "18-45 years (Age)": 1579068,
    "45-60 years (Age)": 1811814,
    "60+ years (Age)": 903299,
    "Total Doses Administered": 5360385
  },
  {
    "Updated On": "20/06/2021",
    "State": "Bihar",
    "Total Individuals Vaccinated": 11630826,
    "Total Sessions Conducted": 1272921,
    "Total Sites": 2197,
    "First Dose Administered": 11630826,
    "Second Dose Administered": 2049552,
    "Male(Individuals Vaccinated)": 6436064,
    "Female(Individuals Vaccinated)": 5192448,
    "Transgender(Individuals Vaccinated)": 2314,
    "Total Covaxin Administered": 1297687,
    "Total CoviShield Administered": 12382691,
    "Total Sputnik V Administered": 0,
    "AEFI": 201,
    "18-45 years (Age)": 4469114,
    "45-60 years (Age)": 3592438,
    "60+ years (Age)": 3564700,
    "Total Doses Administered": 13680378
  },
  {
    "Updated On": "20/06/2021",
    "State": "Chandigarh",
    "Total Individuals Vaccinated": 376354,
    "Total Sessions Conducted": 10810,
    "Total Sites": 28,
    "First Dose Administered": 376354,
    "Second Dose Administered": 77223,
    "Male(Individuals Vaccinated)": 212636,
    "Female(Individuals Vaccinated)": 163657,
    "Transgender(Individuals Vaccinated)": 61,
    "Total Covaxin Administered": 350,
    "Total CoviShield Administered": 453227,
    "Total Sputnik V Administered": 0,
    "AEFI": 139,
    "18-45 years (Age)": 168588,
    "45-60 years (Age)": 128012,
    "60+ years (Age)": 79502,
    "Total Doses Administered": 453577
  },
  {
    "Updated On": "20/06/2021",
    "State": "Chhattisgarh",
    "Total Individuals Vaccinated": 5192061,
    "Total Sessions Conducted": 248472,
    "Total Sites": 1275,
    "First Dose Administered": 5192061,
    "Second Dose Administered": 1188429,
    "Male(Individuals Vaccinated)": 2538327,
    "Female(Individuals Vaccinated)": 2653152,
    "Transgender(Individuals Vaccinated)": 582,
    "Total Covaxin Administered": 236184,
    "Total CoviShield Administered": 6144306,
    "Total Sputnik V Administered": 0,
    "AEFI": 564,
    "18-45 years (Age)": 471006,
    "45-60 years (Age)": 2960611,
    "60+ years (Age)": 1760077,
    "Total Doses Administered": 6380490
  },
  {
    "Updated On": "20/06/2021",
    "State": "Dadra and Nagar Haveli and Daman and Diu",
    "Total Individuals Vaccinated": "",
    "Total Sessions Conducted": "",
    "Total Sites": "",
    "First Dose Administered": "",
    "Second Dose Administered": "",
    "Male(Individuals Vaccinated)": "",
    "Female(Individuals Vaccinated)": "",
    "Transgender(Individuals Vaccinated)": "",
    "Total Covaxin Administered": "",
    "Total CoviShield Administered": "",
    "Total Sputnik V Administered": "",
    "AEFI": "",
    "18-45 years (Age)": "",
    "45-60 years (Age)": "",
    "60+ years (Age)": "",
    "Total Doses Administered": 0
  },
  {
    "Updated On": "20/06/2021",
    "State": "Delhi",
    "Total Individuals Vaccinated": 4953785,
    "Total Sessions Conducted": 69187,
    "Total Sites": 122,
    "First Dose Administered": 4953785,
    "Second Dose Administered": 1580008,
    "Male(Individuals Vaccinated)": 2876076,
    "Female(Individuals Vaccinated)": 2076706,
    "Transgender(Individuals Vaccinated)": 1003,
    "Total Covaxin Administered": 1982623,
    "Total CoviShield Administered": 4550461,
    "Total Sputnik V Administered": 709,
    "AEFI": 962,
    "18-45 years (Age)": 2099082,
    "45-60 years (Age)": 1779844,
    "60+ years (Age)": 1070238,
    "Total Doses Administered": 6533793
  },
  {
    "Updated On": "20/06/2021",
    "State": "Goa",
    "Total Individuals Vaccinated": 659181,
    "Total Sessions Conducted": 69330,
    "Total Sites": 76,
    "First Dose Administered": 659181,
    "Second Dose Administered": 101025,
    "Male(Individuals Vaccinated)": 341948,
    "Female(Individuals Vaccinated)": 317171,
    "Transgender(Individuals Vaccinated)": 62,
    "Total Covaxin Administered": 15908,
    "Total CoviShield Administered": 744298,
    "Total Sputnik V Administered": 0,
    "AEFI": 576,
    "18-45 years (Age)": 295356,
    "45-60 years (Age)": 205921,
    "60+ years (Age)": 157778,
    "Total Doses Administered": 760206
  },
  {
    "Updated On": "20/06/2021",
    "State": "Gujarat",
    "Total Individuals Vaccinated": 17278756,
    "Total Sessions Conducted": 500558,
    "Total Sites": 1966,
    "First Dose Administered": 17278756,
    "Second Dose Administered": 4820779,
    "Male(Individuals Vaccinated)": 9468219,
    "Female(Individuals Vaccinated)": 7807874,
    "Transgender(Individuals Vaccinated)": 2663,
    "Total Covaxin Administered": 2535203,
    "Total CoviShield Administered": 19564332,
    "Total Sputnik V Administered": 0,
    "AEFI": 1017,
    "18-45 years (Age)": 6602142,
    "45-60 years (Age)": 6126677,
    "60+ years (Age)": 4545709,
    "Total Doses Administered": 22099535
  },
  {
    "Updated On": "20/06/2021",
    "State": "Haryana",
    "Total Individuals Vaccinated": 6216032,
    "Total Sessions Conducted": 275173,
    "Total Sites": 309,
    "First Dose Administered": 6216032,
    "Second Dose Administered": 1151911,
    "Male(Individuals Vaccinated)": 3440927,
    "Female(Individuals Vaccinated)": 2773910,
    "Transgender(Individuals Vaccinated)": 1195,
    "Total Covaxin Administered": 1119998,
    "Total CoviShield Administered": 6247944,
    "Total Sputnik V Administered": 1,
    "AEFI": 872,
    "18-45 years (Age)": 2448506,
    "45-60 years (Age)": 1955358,
    "60+ years (Age)": 1804548,
    "Total Doses Administered": 7367943
  },
  {
    "Updated On": "20/06/2021",
    "State": "Himachal Pradesh",
    "Total Individuals Vaccinated": 2379678,
    "Total Sessions Conducted": 5148,
    "Total Sites": 17,
    "First Dose Administered": 2379678,
    "Second Dose Administered": 440320,
    "Male(Individuals Vaccinated)": 1202274,
    "Female(Individuals Vaccinated)": 1176922,
    "Transgender(Individuals Vaccinated)": 482,
    "Total Covaxin Administered": 413,
    "Total CoviShield Administered": 2818085,
    "Total Sputnik V Administered": 1500,
    "AEFI": 685,
    "18-45 years (Age)": 535737,
    "45-60 years (Age)": 1048509,
    "60+ years (Age)": 794980,
    "Total Doses Administered": 2819998
  },
  {
    "Updated On": "20/06/2021",
    "State": "Jammu and Kashmir",
    "Total Individuals Vaccinated": 3367528,
    "Total Sessions Conducted": 249321,
    "Total Sites": 956,
    "First Dose Administered": 3367528,
    "Second Dose Administered": 603195,
    "Male(Individuals Vaccinated)": 1970058,
    "Female(Individuals Vaccinated)": 1396836,
    "Transgender(Individuals Vaccinated)": 634,
    "Total Covaxin Administered": 80196,
    "Total CoviShield Administered": 3890527,
    "Total Sputnik V Administered": 0,
    "AEFI": 124,
    "18-45 years (Age)": 832799,
    "45-60 years (Age)": 1561777,
    "60+ years (Age)": 972393,
    "Total Doses Administered": 3970723
  },
  {
    "Updated On": "20/06/2021",
    "State": "Jharkhand",
    "Total Individuals Vaccinated": 4869438,
    "Total Sessions Conducted": 536819,
    "Total Sites": 1593,
    "First Dose Administered": 4869438,
    "Second Dose Administered": 909171,
    "Male(Individuals Vaccinated)": 2661665,
    "Female(Individuals Vaccinated)": 2206938,
    "Transgender(Individuals Vaccinated)": 835,
    "Total Covaxin Administered": 832575,
    "Total CoviShield Administered": 4946034,
    "Total Sputnik V Administered": 0,
    "AEFI": 783,
    "18-45 years (Age)": 1847507,
    "45-60 years (Age)": 1682587,
    "60+ years (Age)": 1337467,
    "Total Doses Administered": 5778609
  },
  {
    "Updated On": "20/06/2021",
    "State": "Karnataka",
    "Total Individuals Vaccinated": 15268722,
    "Total Sessions Conducted": 1140306,
    "Total Sites": 3433,
    "First Dose Administered": 15268722,
    "Second Dose Administered": 3229641,
    "Male(Individuals Vaccinated)": 7911405,
    "Female(Individuals Vaccinated)": 7354556,
    "Transgender(Individuals Vaccinated)": 2761,
    "Total Covaxin Administered": 1931696,
    "Total CoviShield Administered": 16565201,
    "Total Sputnik V Administered": 1466,
    "AEFI": 2556,
    "18-45 years (Age)": 4906306,
    "45-60 years (Age)": 5948661,
    "60+ years (Age)": 4403122,
    "Total Doses Administered": 18498363
  },
  {
    "Updated On": "20/06/2021",
    "State": "Kerala",
    "Total Individuals Vaccinated": 9719116,
    "Total Sessions Conducted": 125141,
    "Total Sites": 331,
    "First Dose Administered": 9719116,
    "Second Dose Administered": 2442433,
    "Male(Individuals Vaccinated)": 4697169,
    "Female(Individuals Vaccinated)": 5020309,
    "Transgender(Individuals Vaccinated)": 1638,
    "Total Covaxin Administered": 1078411,
    "Total CoviShield Administered": 11083116,
    "Total Sputnik V Administered": 22,
    "AEFI": 2414,
    "18-45 years (Age)": 2139319,
    "45-60 years (Age)": 3671773,
    "60+ years (Age)": 3897187,
    "Total Doses Administered": 12161549
  },
  {
    "Updated On": "20/06/2021",
    "State": "Ladakh",
    "Total Individuals Vaccinated": 161809,
    "Total Sessions Conducted": 200,
    "Total Sites": 1,
    "First Dose Administered": 161809,
    "Second Dose Administered": 37477,
    "Male(Individuals Vaccinated)": 87200,
    "Female(Individuals Vaccinated)": 74590,
    "Transgender(Individuals Vaccinated)": 19,
    "Total Covaxin Administered": 0,
    "Total CoviShield Administered": 199286,
    "Total Sputnik V Administered": 0,
    "AEFI": 4,
    "18-45 years (Age)": 94436,
    "45-60 years (Age)": 36914,
    "60+ years (Age)": 30419,
    "Total Doses Administered": 199286
  },
  {
    "Updated On": "20/06/2021",
    "State": "Lakshadweep",
    "Total Individuals Vaccinated": 44347,
    "Total Sessions Conducted": 6520,
    "Total Sites": 10,
    "First Dose Administered": 44347,
    "Second Dose Administered": 7160,
    "Male(Individuals Vaccinated)": 23878,
    "Female(Individuals Vaccinated)": 20466,
    "Transgender(Individuals Vaccinated)": 3,
    "Total Covaxin Administered": 0,
    "Total CoviShield Administered": 51507,
    "Total Sputnik V Administered": 0,
    "AEFI": 0,
    "18-45 years (Age)": 23326,
    "45-60 years (Age)": 13519,
    "60+ years (Age)": 7502,
    "Total Doses Administered": 51507
  },
  {
    "Updated On": "20/06/2021",
    "State": "Madhya Pradesh",
    "Total Individuals Vaccinated": 12965037,
    "Total Sessions Conducted": 44624,
    "Total Sites": 189,
    "First Dose Administered": 12965037,
    "Second Dose Administered": 2054780,
    "Male(Individuals Vaccinated)": 7264881,
    "Female(Individuals Vaccinated)": 5697697,
    "Transgender(Individuals Vaccinated)": 2459,
    "Total Covaxin Administered": 2012568,
    "Total CoviShield Administered": 13007249,
    "Total Sputnik V Administered": 0,
    "AEFI": 614,
    "18-45 years (Age)": 5610889,
    "45-60 years (Age)": 4144227,
    "60+ years (Age)": 3204616,
    "Total Doses Administered": 15019817
  },
  {
    "Updated On": "20/06/2021",
    "State": "Maharashtra",
    "Total Individuals Vaccinated": 22244712,
    "Total Sessions Conducted": 588752,
    "Total Sites": 1625,
    "First Dose Administered": 22244712,
    "Second Dose Administered": 5489262,
    "Male(Individuals Vaccinated)": 12001847,
    "Female(Individuals Vaccinated)": 10239649,
    "Transgender(Individuals Vaccinated)": 3216,
    "Total Covaxin Administered": 3440309,
    "Total CoviShield Administered": 24292538,
    "Total Sputnik V Administered": 1127,
    "AEFI": 4046,
    "18-45 years (Age)": 5692538,
    "45-60 years (Age)": 9179222,
    "60+ years (Age)": 7356559,
    "Total Doses Administered": 27733974
  },
  {
    "Updated On": "20/06/2021",
    "State": "Manipur",
    "Total Individuals Vaccinated": 493565,
    "Total Sessions Conducted": 1843,
    "Total Sites": 12,
    "First Dose Administered": 493565,
    "Second Dose Administered": 72145,
    "Male(Individuals Vaccinated)": 273082,
    "Female(Individuals Vaccinated)": 220334,
    "Transgender(Individuals Vaccinated)": 149,
    "Total Covaxin Administered": 0,
    "Total CoviShield Administered": 565710,
    "Total Sputnik V Administered": 0,
    "AEFI": 83,
    "18-45 years (Age)": 220684,
    "45-60 years (Age)": 175327,
    "60+ years (Age)": 97318,
    "Total Doses Administered": 565710
  },
  {
    "Updated On": "20/06/2021",
    "State": "Meghalaya",
    "Total Individuals Vaccinated": 515897,
    "Total Sessions Conducted": 2160,
    "Total Sites": 4,
    "First Dose Administered": 515897,
    "Second Dose Administered": 75075,
    "Male(Individuals Vaccinated)": 269376,
    "Female(Individuals Vaccinated)": 246460,
    "Transgender(Individuals Vaccinated)": 61,
    "Total Covaxin Administered": 0,
    "Total CoviShield Administered": 590972,
    "Total Sputnik V Administered": 0,
    "AEFI": 279,
    "18-45 years (Age)": 253492,
    "45-60 years (Age)": 183791,
    "60+ years (Age)": 78552,
    "Total Doses Administered": 590972
  },
  {
    "Updated On": "20/06/2021",
    "State": "Mizoram",
    "Total Individuals Vaccinated": 376032,
    "Total Sessions Conducted": 0,
    "Total Sites": 0,
    "First Dose Administered": 376032,
    "Second Dose Administered": 52654,
    "Male(Individuals Vaccinated)": 188025,
    "Female(Individuals Vaccinated)": 187958,
    "Transgender(Individuals Vaccinated)": 49,
    "Total Covaxin Administered": 0,
    "Total CoviShield Administered": 428686,
    "Total Sputnik V Administered": 0,
    "AEFI": 850,
    "18-45 years (Age)": 162811,
    "45-60 years (Age)": 130751,
    "60+ years (Age)": 82379,
    "Total Doses Administered": 428686
  },
  {
    "Updated On": "20/06/2021",
    "State": "Nagaland",
    "Total Individuals Vaccinated": 346298,
    "Total Sessions Conducted": 35950,
    "Total Sites": 91,
    "First Dose Administered": 346298,
    "Second Dose Administered": 53072,
    "Male(Individuals Vaccinated)": 196111,
    "Female(Individuals Vaccinated)": 150144,
    "Transgender(Individuals Vaccinated)": 43,
    "Total Covaxin Administered": 0,
    "Total CoviShield Administered": 399370,
    "Total Sputnik V Administered": 0,
    "AEFI": 39,
    "18-45 years (Age)": 190336,
    "45-60 years (Age)": 101355,
    "60+ years (Age)": 54489,
    "Total Doses Administered": 399370
  },
  {
    "Updated On": "20/06/2021",
    "State": "Odisha",
    "Total Individuals Vaccinated": 8037617,
    "Total Sessions Conducted": 42524,
    "Total Sites": 107,
    "First Dose Administered": 8037617,
    "Second Dose Administered": 1808515,
    "Male(Individuals Vaccinated)": 4303135,
    "Female(Individuals Vaccinated)": 3733024,
    "Transgender(Individuals Vaccinated)": 1458,
    "Total Covaxin Administered": 1151609,
    "Total CoviShield Administered": 8694523,
    "Total Sputnik V Administered": 0,
    "AEFI": 308,
    "18-45 years (Age)": 1942331,
    "45-60 years (Age)": 3335744,
    "60+ years (Age)": 2757686,
    "Total Doses Administered": 9846132
  },
  {
    "Updated On": "20/06/2021",
    "State": "Puducherry",
    "Total Individuals Vaccinated": 362503,
    "Total Sessions Conducted": 73970,
    "Total Sites": 63,
    "First Dose Administered": 362503,
    "Second Dose Administered": 56169,
    "Male(Individuals Vaccinated)": 185578,
    "Female(Individuals Vaccinated)": 176873,
    "Transgender(Individuals Vaccinated)": 52,
    "Total Covaxin Administered": 74,
    "Total CoviShield Administered": 418598,
    "Total Sputnik V Administered": 0,
    "AEFI": 19,
    "18-45 years (Age)": 174462,
    "45-60 years (Age)": 113219,
    "60+ years (Age)": 74712,
    "Total Doses Administered": 418672
  },
  {
    "Updated On": "20/06/2021",
    "State": "Punjab",
    "Total Individuals Vaccinated": 4565935,
    "Total Sessions Conducted": 597208,
    "Total Sites": 1142,
    "First Dose Administered": 4565935,
    "Second Dose Administered": 856952,
    "Male(Individuals Vaccinated)": 2571915,
    "Female(Individuals Vaccinated)": 1993461,
    "Transgender(Individuals Vaccinated)": 559,
    "Total Covaxin Administered": 532348,
    "Total CoviShield Administered": 4890539,
    "Total Sputnik V Administered": 0,
    "AEFI": 133,
    "18-45 years (Age)": 1222733,
    "45-60 years (Age)": 1889813,
    "60+ years (Age)": 1452715,
    "Total Doses Administered": 5422887
  },
  {
    "Updated On": "20/06/2021",
    "State": "Rajasthan",
    "Total Individuals Vaccinated": 17808082,
    "Total Sessions Conducted": 805255,
    "Total Sites": 2644,
    "First Dose Administered": 17808082,
    "Second Dose Administered": 3430094,
    "Male(Individuals Vaccinated)": 9434942,
    "Female(Individuals Vaccinated)": 8370102,
    "Transgender(Individuals Vaccinated)": 3038,
    "Total Covaxin Administered": 2194302,
    "Total CoviShield Administered": 19043874,
    "Total Sputnik V Administered": 0,
    "AEFI": 488,
    "18-45 years (Age)": 5677016,
    "45-60 years (Age)": 6344883,
    "60+ years (Age)": 5775933,
    "Total Doses Administered": 21238176
  },
  {
    "Updated On": "20/06/2021",
    "State": "Sikkim",
    "Total Individuals Vaccinated": 299524,
    "Total Sessions Conducted": 1800,
    "Total Sites": 5,
    "First Dose Administered": 299524,
    "Second Dose Administered": 59911,
    "Male(Individuals Vaccinated)": 162455,
    "Female(Individuals Vaccinated)": 136978,
    "Transgender(Individuals Vaccinated)": 91,
    "Total Covaxin Administered": 0,
    "Total CoviShield Administered": 359435,
    "Total Sputnik V Administered": 0,
    "AEFI": 226,
    "18-45 years (Age)": 148893,
    "45-60 years (Age)": 94319,
    "60+ years (Age)": 56152,
    "Total Doses Administered": 359435
  },
  {
    "Updated On": "20/06/2021",
    "State": "Tamil Nadu",
    "Total Individuals Vaccinated": 10429212,
    "Total Sessions Conducted": 1174817,
    "Total Sites": 1532,
    "First Dose Administered": 10429212,
    "Second Dose Administered": 2272203,
    "Male(Individuals Vaccinated)": 5718152,
    "Female(Individuals Vaccinated)": 4709615,
    "Transgender(Individuals Vaccinated)": 1445,
    "Total Covaxin Administered": 2144571,
    "Total CoviShield Administered": 10556439,
    "Total Sputnik V Administered": 405,
    "AEFI": 136,
    "18-45 years (Age)": 4590717,
    "45-60 years (Age)": 3532603,
    "60+ years (Age)": 2302968,
    "Total Doses Administered": 12701415
  },
  {
    "Updated On": "20/06/2021",
    "State": "Telangana",
    "Total Individuals Vaccinated": 7785158,
    "Total Sessions Conducted": 583616,
    "Total Sites": 860,
    "First Dose Administered": 7785158,
    "Second Dose Administered": 1388763,
    "Male(Individuals Vaccinated)": 4068737,
    "Female(Individuals Vaccinated)": 3714856,
    "Transgender(Individuals Vaccinated)": 1565,
    "Total Covaxin Administered": 1770763,
    "Total CoviShield Administered": 7376481,
    "Total Sputnik V Administered": 26677,
    "AEFI": 383,
    "18-45 years (Age)": 3087828,
    "45-60 years (Age)": 2910862,
    "60+ years (Age)": 1781783,
    "Total Doses Administered": 9173921
  },
  {
    "Updated On": "20/06/2021",
    "State": "Tripura",
    "Total Individuals Vaccinated": 1403613,
    "Total Sessions Conducted": 287354,
    "Total Sites": 314,
    "First Dose Administered": 1403613,
    "Second Dose Administered": 539093,
    "Male(Individuals Vaccinated)": 727282,
    "Female(Individuals Vaccinated)": 676133,
    "Transgender(Individuals Vaccinated)": 198,
    "Total Covaxin Administered": 24443,
    "Total CoviShield Administered": 1918263,
    "Total Sputnik V Administered": 0,
    "AEFI": 63,
    "18-45 years (Age)": 404567,
    "45-60 years (Age)": 655468,
    "60+ years (Age)": 342780,
    "Total Doses Administered": 1942706
  },
  {
    "Updated On": "20/06/2021",
    "State": "Uttar Pradesh",
    "Total Individuals Vaccinated": 21602698,
    "Total Sessions Conducted": 70336,
    "Total Sites": 217,
    "First Dose Administered": 21602698,
    "Second Dose Administered": 4024387,
    "Male(Individuals Vaccinated)": 12438499,
    "Female(Individuals Vaccinated)": 9158238,
    "Transgender(Individuals Vaccinated)": 5961,
    "Total Covaxin Administered": 3194980,
    "Total CoviShield Administered": 22432105,
    "Total Sputnik V Administered": 0,
    "AEFI": 1264,
    "18-45 years (Age)": 7073629,
    "45-60 years (Age)": 8589826,
    "60+ years (Age)": 5929795,
    "Total Doses Administered": 25627085
  },
  {
    "Updated On": "20/06/2021",
    "State": "Uttarakhand",
    "Total Individuals Vaccinated": 2821983,
    "Total Sessions Conducted": 52463,
    "Total Sites": 226,
    "First Dose Administered": 2821983,
    "Second Dose Administered": 734171,
    "Male(Individuals Vaccinated)": 1464695,
    "Female(Individuals Vaccinated)": 1356535,
    "Transgender(Individuals Vaccinated)": 753,
    "Total Covaxin Administered": 194170,
    "Total CoviShield Administered": 3361984,
    "Total Sputnik V Administered": 0,
    "AEFI": 298,
    "18-45 years (Age)": 897025,
    "45-60 years (Age)": 1056773,
    "60+ years (Age)": 866973,
    "Total Doses Administered": 3556154
  },
  {
    "Updated On": "20/06/2021",
    "State": "West Bengal",
    "Total Individuals Vaccinated": 14736671,
    "Total Sessions Conducted": 385941,
    "Total Sites": 732,
    "First Dose Administered": 14736671,
    "Second Dose Administered": 4274276,
    "Male(Individuals Vaccinated)": 8294637,
    "Female(Individuals Vaccinated)": 6439825,
    "Transgender(Individuals Vaccinated)": 2209,
    "Total Covaxin Administered": 2364785,
    "Total CoviShield Administered": 16644224,
    "Total Sputnik V Administered": 1938,
    "AEFI": 1304,
    "18-45 years (Age)": 4205886,
    "45-60 years (Age)": 5928402,
    "60+ years (Age)": 4592780,
    "Total Doses Administered": 19010947
  }
]
 
  
  
  
  
  // var dt1,i
    // const res = await axios.get('https://india-covid19vaccine.github.io/api/state_latest.json')
    // for(i=0;i<res.data.length;i++)
    // {
    //     if(res.data[i].state==='Maharashtra')
    //     {
    //         dt1 = res.data[i].last_updated
    //     }
    // }
   // console.log(res.data)
    // console.log(dt1)
    this.setState({sdata: res})
  
}


 
render() {
  
    const tableIcons = {
        Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
        Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
        Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
        Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
        DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
        Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
        Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
        Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
        FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
        LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
        NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
        PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
        ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
        Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
        SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
        ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
        ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
      };
    return (
      <div className="main-container">
       {/* <Csvtable/> */}
        <div className="Vaccine">
          <br/>
          <div style={{fontSize:13, fontStyle:"italic"}}>Source: india-covid19vaccine.github.io <br/>Last Updated: 20/06/2021-09:55PM</div>
          <MaterialTable
          icons={tableIcons}
            columns={[
              { title: "State", field: "State"},
              { title: "Total Individuals Vaccinated", field: "Total Individuals Vaccinated"},
              {title:'First Dose Administered',field:'First Dose Administered'},

              {
                title: "Second Dose Administered",
                field: "Second Dose Administered",
              },
             

            ]}
            data={this.state.sdata}
            title=""
            options={{
              headerStyle: {
                backgroundColor: '#3b3c3d',
                color: '#feffff',
                fontSize: '1rem'
              },
              tableLayout: {
                AddBox: true
              }
            }}
          />
      </div>
      <Footer/>
      </div>
    );
  }
}

export default VaccinationTable;

