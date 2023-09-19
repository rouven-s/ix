/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { IxCol, IxLayoutGrid, IxRow } from '@siemens/ix-react';
import React from 'react';
// Example styling for documentation
import './grid.css';

export default () => {
  return (
    <div className="example-parent">
      <h4>Grid with padding</h4>
      <IxLayoutGrid className={'ExampleGrid'}>
        <IxRow>
          <IxCol>1</IxCol>
          <IxCol>2</IxCol>
          <IxCol>3</IxCol>
          <IxCol>4</IxCol>
          <IxCol>5</IxCol>
          <IxCol>6</IxCol>
          <IxCol>7</IxCol>
          <IxCol>8</IxCol>
          <IxCol>9</IxCol>
          <IxCol>10</IxCol>
          <IxCol>11</IxCol>
          <IxCol>12</IxCol>
        </IxRow>
      </IxLayoutGrid>

      <h4>Grid without padding</h4>
      <IxLayoutGrid noPadding className={'ExampleGrid'}>
        <IxRow>
          <IxCol>1</IxCol>
          <IxCol>2</IxCol>
          <IxCol>3</IxCol>
          <IxCol>4</IxCol>
          <IxCol>5</IxCol>
          <IxCol>6</IxCol>
          <IxCol>7</IxCol>
          <IxCol>8</IxCol>
          <IxCol>9</IxCol>
          <IxCol>10</IxCol>
          <IxCol>11</IxCol>
          <IxCol>12</IxCol>
        </IxRow>
      </IxLayoutGrid>
    </div>
  );
};