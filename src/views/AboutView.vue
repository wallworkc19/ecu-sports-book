<template>
  <div class="about">
    <table>
            <br><br>
            <tr>
              <th>Game #</th>
              <th>Date</th>
              <th>Home/Away</th>
              <th>Playing</th>
              <th>Odds</th>
              <th>Bet</th>
            </tr>
            <tr>
              <td>1</td>
              <td>9/03/22</td>
              <td>Home</td>
              <td>NC State</td>
              <td>+2200</td>
              <td><input type="number" min="0" id="n0" value="0"> <button>Bet Points</button></td>
            </tr>
            <tr>
                <td>2</td>
                <td>9/10/22</td>
                <td>Home</td>
                <td>Old Dominion</td>
                <td>50</td>
                <td><input type="number" min="0" id="n1" value="0"> <button>Bet Points</button></td>
            </tr>
            <tr>
                <td>3</td>
                <td>9/17/22</td>
                <td>Home</td>
                <td>Campbell</td>
                <td>50</td>
                <td><input type="number" min="0" id="n2" value="0"> <button>Bet Points</button></td>
            </tr>
            <tr>
                <td>4</td>
                <td>9/24/22</td>
                <td>Home</td>
                <td>Navy</td>
                <td>50</td>
                <td><input type="number" min="0" id="n3" value="0"> <button>Bet Points</button></td>
            </tr>
            <tr>
                <td>5</td>
                <td>10/01/22</td>
                <td>Away</td>
                <td>South Florida</td>
                <td>50</td>
                <td><input type="number" min="0" id="n4" value="0"> <button>Bet Points</button></td>
            </tr>
            <tr>
                <td>6</td>
                <td>10/08/22</td>
                <td>Away</td>
                <td>Tulane</td>
                <td>50</td>
                <td><input type="number" min="0" id="n5" value="0"> <button>Bet Points</button></td>
            </tr>
            <tr>
                <td>7</td>
                <td>10/15/22</td>
                <td>Home</td>
                <td>Memphis</td>
                <td>50</td>
                <td><input type="number" min="0" id="n6" value="0"> <button>Bet Points</button></td>
            </tr>
            <tr>
                <td>8</td>
                <td>10/22/22</td>
                <td>Home</td>
                <td>UCF</td>
                <td>50</td>
                <td><input type="number" min="0" id="n7" value="0"> <button>Bet Points</button></td>
            </tr>
            <tr>
                <td>9</td>
                <td>10/28/22</td>
                <td>Away</td>
                <td>BYU</td>
                <td>50</td>
                <td><input type="number" min="0" id="n8" value="0"> <button>Bet Points</button></td>
            </tr>
            <tr>
                <td>10</td>
                <td>11/11/22</td>
                <td>Away</td>
                <td>Cincinnati</td>
                <td>50</td>
                <td><input type="number" min="0" id="n9" value="0"> <button>Bet Points</button></td>
            </tr>
            <tr>
                <td>11</td>
                <td>11/19/22</td>
                <td>Home</td>
                <td>Houston</td>
                <td>50</td>
                <td><input type="number" min="0" id="n10" value="0"> <button>Bet Points</button></td>
            </tr>
            <tr>
                <td>12</td>
                <td>11/26/22</td>
                <td>Away</td>
                <td>Temple</td>
                <td>50</td>
                <td><input type="number" min="0" id="n11" value="0"> <button>Bet Points</button></td>
            </tr>
            <tr>
                <td>13</td>
                <td>12/03/22</td>
                <td>Away</td>
                <td>TBD</td>
                <td>50</td>
                <td><input type="number" min="0" id="n12" value="0"> <button>Bet Points</button></td>
            </tr>
        </table>
  </div>
</template>
<style>
  table {
      font-family: arial, sans-serif;
      border-collapse: collapse;
      width: 95%;
      margin: auto;
  }

  td, th {
      border: 1px solid #cfb53b;
      text-align: center;
      padding: 15px;
  }

  th {
      background-color: #cfb53b;
  }
  tr:nth-child(odd) {
      background-color: #5C5C5C;
  }
</style>