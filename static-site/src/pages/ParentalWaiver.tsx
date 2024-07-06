import React from 'react';
import { Flex, Heading, ListItem, OrderedList, Text } from '@chakra-ui/react';

const ParentalWaiver: React.FC = () => (
  <>
    <Heading as="h1" size="lg" mb={4}>
    Parental Waiver for Minors (Ages 16-17) at Fordland Fitness
    </Heading>
    <Flex gap={4} flexDirection={"column"}>
    <Text>
    In consideration of allowing my minor child to use the facilities and equipment at Fordland Fitness, located in Fordland, Missouri, I, the parent/legal guardian, hereby agree to the following terms and conditions:
    </Text>
    <OrderedList>
        <ListItem mb={4}>
        Acknowledgment of Risks: I understand and acknowledge that the use of fitness facilities and equipment involves inherent risks, including but not limited to, the risk of injury, illness, accident, or death.
        </ListItem>
        <ListItem mb={4}>
        Responsibility for Supervision: I agree to supervise my minor child at all times while they are using the facilities and equipment at Fordland Fitness. I understand that Fordland Fitness operates on a 24-hour unmanned basis and that there will be no staff present to supervise my child.
        </ListItem>
        <ListItem mb={4}>
        Assumption of Risk: I understand that my minor child will be responsible for their own safety while using Fordland Fitness facilities and equipment. I acknowledge that neither Fordland Fitness nor its owners, operators, or affiliates will be held liable for any injury, illness, or accident that may occur.
        </ListItem>
        <ListItem mb={4}>
        Release of Liability: I hereby release, waive, discharge, and covenant not to sue Fordland Fitness, its owners, operators, or affiliates for any and all liability, claims, demands, actions, or rights of action arising out of or related to any loss, damage, or injury, including death, that may be sustained by my minor child while using Fordland Fitness facilities and equipment.
        </ListItem>
        <ListItem mb={4}>
        Consent for Medical Treatment: In the event of any injury or medical emergency involving my minor child while they are at Fordland Fitness, I authorize emergency medical personnel to administer necessary medical treatment. I agree to be financially responsible for any medical treatment expenses incurred.
        </ListItem>
        <ListItem>
        Agreement to Terms: I have read and fully understand the terms and conditions outlined in this Parental Waiver for Minors at Fordland Fitness. I agree to abide by these terms and acknowledge that they constitute a legally binding agreement between myself, Fordland Fitness, and its owners, operators, and affiliates.
        </ListItem>
    </OrderedList>
    <Text>
    By purchasing a drop-in pass or using any Fordland Fitness facility, you acknowledge that you have read, understood, and agreed to these Drop-In Terms and Conditions.
    </Text>
    </Flex>
  </>
);

export default ParentalWaiver;