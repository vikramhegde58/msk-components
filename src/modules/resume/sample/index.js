/* 🙋‍♂️Explaination
*************************************************************************
This is the file where all the functions of this component are exported.
The exported functions are then used to create a bundle of the component 
and it will be deployed to https://mskdocuments.com
*************************************************************************
*/

/* ✅RULES & BEST PRACTICES
*************************************************************************
Please follow these rules if you want your component to go LIVE.

1. DO NOT alter this file unless necessary.
2. Make sure all the functions are exported here.
3. If you don't export, the component package will fail to build.
*************************************************************************
*/

/* 👨‍💻Your code starts below.
*************************************************************************
Happy coding.
*************************************************************************/

import metadata from './metadata';
import variants from './variants';
import properties from './properties'
import contributors from './contributors'

const Sample = {
  metadata,
  variants,
  properties,
  contributors
}

export default Sample;
