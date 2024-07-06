import React from 'react';
import { Flex, Heading, ListItem, OrderedList, Text } from '@chakra-ui/react';

const Terms: React.FC = () => (
  <>
    <Heading as="h1" size="lg" mb={4}>
    Fordland Fitness Membership Terms and Conditions
    </Heading>
    <Flex gap={4} flexDirection={"column"}>
    <Text>
    These Drop-In Terms and Conditions ("Terms") govern the use of Fordland Fitness facilities by individuals purchasing a drop-in pass. By purchasing a drop-in pass or using any Fordland Fitness facility, you agree to abide by these Terms.
    </Text>
    <Heading as="h3" size={"md"}>
    1 Eligibility
    </Heading>
    <OrderedList listStyleType={"none"}>
        <ListItem mb={4}>
        1.1. Drop-in access is available to individuals aged 18 years and older or 16-17 years old with a Parental Waiver.
        </ListItem>
        <ListItem mb={4}>
        1.2. Fordland Fitness reserves the right to refuse drop-in access to anyone at its discretion.
        </ListItem>
    </OrderedList>
    <Heading as="h3" size={"md"}>
    2 Drop-In Fee and Payment
    </Heading>
    <OrderedList listStyleType={"none"}>
        <ListItem mb={4}>
        2.1. Drop-in fees must be paid in full before access to Fordland Fitness facilities is granted.
        </ListItem>
        <ListItem mb={4}>
        2.2. Payment methods accepted for drop-in fees will be communicated by Fordland Fitness.
        </ListItem>
    </OrderedList>
    <Heading as="h3" size={"md"}>
    3 Facility Access
    </Heading>
    <OrderedList listStyleType={"none"}>
        <ListItem mb={4}>
        3.1. Fordland Fitness operates on a 24-hour unmanned basis. Drop-in users will be granted access via keycard or electronic passcode.
        </ListItem>
        <ListItem mb={4}>
        3.2. Drop-in users must keep their access information confidential and not share it with others.
        </ListItem>
        <ListItem mb={4}>
        3.3. Drop-in users are responsible for securing the premises upon entry and exit.
        </ListItem>
    </OrderedList>
    <Heading as="h3" size={"md"}>
    4 Code of Conduct
    </Heading>
    <OrderedList listStyleType={"none"}>
        <ListItem mb={4}>
        4.1. Drop-in users must conduct themselves in a respectful and courteous manner towards staff and other members.
        </ListItem>
        <ListItem mb={4}>
        4.2. Use of profanity, harassment, or any form of disruptive behavior will not be tolerated.
        </ListItem>
        <ListItem mb={4}>
        4.3. Drop-in users must follow all posted rules and regulations within Fordland Fitness facilities.
        </ListItem>
    </OrderedList>
    <Heading as="h3" size={"md"}>
    5 Equipment Use
    </Heading>
    <OrderedList listStyleType={"none"}>
        <ListItem mb={4}>
        5.1. Drop-in users must use all equipment properly and in accordance with any posted instructions.
        </ListItem>
        <ListItem mb={4}>
        5.2. Improper use of equipment may result in damage charges and/or denial of future drop-in access.
        </ListItem>
        <ListItem mb={4}>
        5.3. Drop-in users are encouraged to wipe down equipment after use and return all weights and accessories to their designated areas.
        </ListItem>
    </OrderedList>
    <Heading as="h3" size={"md"}>
    6 Liability Waiver
    </Heading>
    <OrderedList listStyleType={"none"}>
        <ListItem mb={4}>
        6.1. Drop-in users acknowledge that the use of Fordland Fitness facilities and equipment carries inherent risks.
        </ListItem>
        <ListItem mb={4}>
        6.2. Fordland Fitness is not liable for any injury, loss, or damage sustained while using its facilities, except in cases of gross negligence.
        </ListItem>
    </OrderedList>
    <Heading as="h3" size={"md"}>
    7 Agreement to Terms
    </Heading>
    <OrderedList listStyleType={"none"}>
        <ListItem mb={4}>
        7.1. By purchasing a drop-in pass or using any Fordland Fitness facility, drop-in users acknowledge that they have read, understood, and agreed to these Drop-In Terms and Conditions.
        </ListItem>
        <ListItem mb={4}>
        7.2. Failure to comply with these Terms may result in immediate termination of drop-in access without refund.
        </ListItem>
    </OrderedList>
    <Heading as="h3" size={"md"}>
    8 Governing Law
    </Heading>
    <OrderedList listStyleType={"none"}>
        <ListItem mb={4}>
        8.1. These Terms are governed by the laws of the state of Missouri.
        </ListItem>
        <ListItem mb={4}>
        8.2. Any disputes arising from these Terms shall be resolved through arbitration in accordance with the laws of Missouri.
        </ListItem>
    </OrderedList>
    <Text>
    By purchasing a drop-in pass or using any Fordland Fitness facility, you acknowledge that you have read, understood, and agreed to these Drop-In Terms and Conditions.
    </Text>
    </Flex>
  </>
);

export default Terms;