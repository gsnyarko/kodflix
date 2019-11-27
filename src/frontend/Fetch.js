import React, { useEffect, useState } from 'react';

export default function Fetch() {

  let [getData, setGetData] = useState([]);

useEffect (() => {
      fetch('/rest/movies')
      .then(Response => Response.json())
      .then(getData => setGetData(getData))
}, []);

return (
<div>

<div>{getData}</div>
</div>

)

}
