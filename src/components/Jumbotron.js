/*
Copyright 2016 Ericsson AB.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import React, {PropTypes} from 'react'

const Jumbotron = ({header, subheader, children}) => (
  <div className="jumbotron">
    <h1>{header}</h1>
    <h2>{subheader}</h2>
    {children}
  </div>
)

Jumbotron.propTypes = {
  header: PropTypes.string.isRequired,
  subheader: PropTypes.string.isRequired,
  children: PropTypes.node,
}

export default Jumbotron
