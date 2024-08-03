import React from 'react';
import { Flex, Heading, ListItem, OrderedList, Text } from '@chakra-ui/react';

const Waiver: React.FC = () => (
  <>
    <Heading as="h1" size="lg" mb={4}>
      Waiver
    </Heading>
    <Flex gap={4} flexDirection={"column"}>
    <Text>
    I hereby acknowledge and agree to the terms outlined below as a condition of using Fordland Fitness, a 24-hour unmanned weightlifting gym facility located at 297 W Sunset, Fordland, MO 65652:
    </Text>
    <OrderedList>
        <ListItem mb={4}>
        Assumption of Risk: I understand that the weightlifting gym operates without staff supervision. I acknowledge that the use of gym equipment, including but not limited to weights, machines, and accessories, carries inherent risks of injury. I voluntarily assume all risks associated with my use of the gym facilities.
        </ListItem>
        <ListItem mb={4}>
        Safety Precautions: I agree to exercise caution and use the gym equipment properly and responsibly. I will refrain from engaging in activities beyond my physical capabilities and will seek guidance or supervision if necessary.
        </ListItem>
        <ListItem mb={4}>
        Emergency Procedures: I understand that in the event of an emergency, there may not be staff present to provide assistance. I agree to familiarize myself with the location of emergency exits and emergency contact information posted within the gym premises. I agree to provide my own first aid supplies.
        </ListItem>
        <ListItem mb={4}>
        Liability Release: I hereby release, waive, discharge, and covenant not to sue the owners, operators, landlords, or any affiliated entities of the weightlifting gym for any liability, claims, demands, actions, or causes of action arising out of or related to any loss, damage, or injury, including death, that may be sustained by me while using the gym facilities, whether caused by the negligence of the gym or otherwise.
        </ListItem>
        <ListItem mb={4}>
        Indemnification: I agree to indemnify and hold harmless the weightlifting gym, its owners, operators, and affiliates from any and all claims, liabilities, damages, losses, costs, or expenses, including legal fees, arising out of or related to my use of the gym facilities.
        </ListItem>
        <ListItem>
        Agreement to Terms: I acknowledge that I have read and understood this waiver in its entirety. I agree to abide by all rules and regulations posted within the gym premises and to comply with any instructions provided by the gym's management.
        </ListItem>
    </OrderedList>
    <Text>
    By using the equipment at Fordland Fitness, I certify that I am of legal age and competent to enter into this agreement. I understand that this waiver is a binding legal document and that by signing it, I am giving up certain legal rights.
    </Text>
    </Flex>
  </>
);

export default Waiver;
