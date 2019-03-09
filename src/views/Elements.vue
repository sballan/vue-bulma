<template>
  <div>
    <h1>Here are some Elements</h1>

    <br>

    <p>Here is a simple button</p>
    <vb-button>My Button</vb-button>

    <br>
    <br>

    <p>Here is a button with the attribute c="primary"</p>
    <vb-button vb-is="primary">My Button</vb-button>

    <br>
    <br>
    <p>Progress Bar</p>
    <vb-progress vb-is="primary small" value="20" max="100"></vb-progress>

    <br>
    <br>
    <p>Notification</p>
    <vb-notification withDelete="large">Here is a notification</vb-notification>

    <br>
    <br>
    <p>Box</p>
    <vb-box>Here is a box</vb-box>

    <br>
    <br>
    <p>Container</p>
    <vb-content>
      <ol type="1">
        <li>Coffee</li>
        <li>Tea</li>
        <li>Milk</li>
      </ol>
      <ol type="A">
        <li>Coffee</li>
        <li>Tea</li>
        <li>Milk</li>
      </ol>
      <ol type="I">
        <li>Coffee</li>
        <li>Tea</li>
        <li>Milk</li>
      </ol>
    </vb-content>


    <br>
    <br>
    <p>Table</p>
    <vb-table>
      <template #thead>
        <thead>
          <tr>
            <th><abbr title="Position">Pos</abbr></th>
            <th>Team</th>
            <th><abbr title="Played">Pld</abbr></th>
            <th><abbr title="Won">W</abbr></th>
            <th><abbr title="Drawn">D</abbr></th>
            <th><abbr title="Lost">L</abbr></th>
            <th><abbr title="Goals for">GF</abbr></th>
            <th><abbr title="Goals against">GA</abbr></th>
            <th><abbr title="Goal difference">GD</abbr></th>
            <th><abbr title="Points">Pts</abbr></th>
            <th>Qualification or relegation</th>
          </tr>
        </thead>
      </template>

      <template #tfoot>
        <tfoot>
          <tr>
            <th><abbr title="Position">Pos</abbr></th>
            <th>Team</th>
            <th><abbr title="Played">Pld</abbr></th>
            <th><abbr title="Won">W</abbr></th>
            <th><abbr title="Drawn">D</abbr></th>
            <th><abbr title="Lost">L</abbr></th>
            <th><abbr title="Goals for">GF</abbr></th>
            <th><abbr title="Goals against">GA</abbr></th>
            <th><abbr title="Goal difference">GD</abbr></th>
            <th><abbr title="Points">Pts</abbr></th>
            <th>Qualification or relegation</th>
          </tr>
        </tfoot>
      </template>

      <template #tbody>
        <tbody>
          <tr>
            <th>10</th>
            <td><a href="https://en.wikipedia.org/wiki/Chelsea_F.C." title="Chelsea F.C.">Chelsea</a></td>
            <td>38</td>
            <td>12</td>
            <td>14</td>
            <td>12</td>
            <td>59</td>
            <td>53</td>
            <td>+6</td>
            <td>50</td>
            <td></td>
          </tr>
          <tr>
            <th>11</th>
            <td><a href="https://en.wikipedia.org/wiki/Everton_F.C." title="Everton F.C.">Everton</a></td>
            <td>38</td>
            <td>11</td>
            <td>14</td>
            <td>13</td>
            <td>59</td>
            <td>55</td>
            <td>+4</td>
            <td>47</td>
            <td></td>
          </tr>
          <tr>
            <th>12</th>
            <td><a href="https://en.wikipedia.org/wiki/Swansea_City_A.F.C." title="Swansea City A.F.C.">Swansea City</a></td>
            <td>38</td>
            <td>12</td>
            <td>11</td>
            <td>15</td>
            <td>42</td>
            <td>52</td>
            <td>−10</td>
            <td>47</td>
            <td></td>
          </tr>
        </tbody>
      </template>
    </vb-table>

  </div>
</template>

<script>
import VbBox from '@/components/elements/VbBox.vue'
import VbButton from '@/components/elements/VbButton.vue'
import VbContent from '@/components/elements/VbContent.vue'
import VbProgress from '@/components/elements/VbProgress.vue'
import VbNotification from '@/components/elements/VbNotification.vue'
import VbTable from '@/components/elements/VbTable.vue'

export default {
  components: {
    VbBox,
    VbButton,
    VbContent,
    VbProgress,
    VbNotification,
    VbTable
  }
}
</script>
