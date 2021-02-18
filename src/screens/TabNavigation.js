import React, { Component } from 'react';
import { Container, Tab, Tabs, TabHeading, Icon, Text } from 'native-base';
import Tab1 from './Tabone';
import Tab2 from './TabTwo';
import Tab3 from './TabThree';

export default class TabNavigation extends Component {
  render() {
    return (

      //Navigation with Icons
      <Container>
        <Tabs>
          <Tab heading={<TabHeading><Icon name="camera" /><Text>Camera</Text></TabHeading>}>
            <Tab1 />
          </Tab>
          <Tab heading={<TabHeading><Text>No Icon</Text></TabHeading>}>
            <Tab2 />
          </Tab>
          <Tab heading={<TabHeading><Icon name="apps" /></TabHeading>}>
            <Tab3 />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}



// Simple Navigation


// import React, { Component } from 'react';
// import { Container, Header, Tab, Tabs, ScrollableTab } from 'native-base';
// import Tab1 from './tabOne';
// . . .
// import Tab5 from './tabFive';
// export default class TabsScrollableExample extends Component {
//   render() {
//     return (
//       <Container>
//         <Header hasTabs/>
//         <Tabs renderTabBar={()=> <ScrollableTab />}>
//           <Tab heading="Tab1">
//             <Tab1 />
//           </Tab>
//           <Tab heading="Tab2">
//             <Tab2 />
//           </Tab>
//           <Tab heading="Tab3">
//             <Tab3 />
//           </Tab>
//           <Tab heading="Tab4">
//             <Tab4 />
//           </Tab>
//           <Tab heading="Tab5">
//             <Tab5 />
//           </Tab>
//         </Tabs>
//       </Container>
//     );
//   }
// }



// Simple Navigation

// import React, { Component } from 'react';
// import { Container, Header, Content, Tab, Tabs } from 'native-base';
// import Tab1 from './tabOne';
// import Tab2 from './tabTwo';
// import Tab3 from './tabThree';
// export default class TabsExample extends Component {
//   render() {
//     return (
//       <Container>
//         <Header hasTabs />
//         <Tabs>
//           <Tab heading="Tab1">
//             <Tab1 />
//           </Tab>
//           <Tab heading="Tab2">
//             <Tab2 />
//           </Tab>
//           <Tab heading="Tab3">
//             <Tab3 />
//           </Tab>
//         </Tabs>
//       </Container>
//     );
//   }
// }