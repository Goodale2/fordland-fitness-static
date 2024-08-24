'use client'

import {
  Box,
  Button,
  Divider,
  Heading,
  Link,
  List,
  ListIcon,
  ListItem,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import { FaCheckCircle } from 'react-icons/fa'

const dailyOptions = [
  { id: 1, desc: 'No Contract' },
  { id: 2, desc: 'Full Day Pass' },
]

const monthlyOptions = [
    {id: 1, desc: 'No Contract'},
    {id: 2, desc: 'Auto Renewal'},
]

const sixMonthContractOptions = [
    {id: 1, desc: 'Contract Secured'},
    {id: 2, desc: 'Auto Renewal'},
]

const yearLongContractOptions = [
    {id: 1, desc: 'Contract Secured'},
    {id: 2, desc: 'Auto Renewal'},
    {id: 4, desc: 'Best Value'}
]

const teacherPlan = [
  {id: 1, desc: 'Contract Secured'},
  {id: 2, desc: 'Auto Renewal'},
  {id: 3, desc: 'Just for Teachers'}
]

interface PackageTierProps {
  title: string
  options: Array<{ id: number; desc: string }>
  typePlan: string
  href?: string
  checked?: boolean
}
const PackageTier = ({ title, options, typePlan, href = "#", checked = false }: PackageTierProps) => {
  const colorTextLight = checked ? 'white' : 'blue.600'
  const bgColorLight = checked ? 'blue.400' : 'gray.300'

  const colorTextDark = checked ? 'white' : 'blue.500'
  const bgColorDark = checked ? 'blue.400' : 'gray.300'

  return (
    <Stack
      p={3}
      py={3}
      justifyContent={{
        base: 'flex-start',
        md: 'space-around',
      }}
      direction={{
        base: 'column',
        md: 'row',
      }}
      alignItems={{ md: 'center' }}>
      <Heading size={'md'} maxW={"170px"}>{title}</Heading>
      <List spacing={3} textAlign="start">
        {options.map((desc, id) => (
          <ListItem key={desc.id}>
            <ListIcon as={FaCheckCircle} color="green.500" />
            {desc.desc}
          </ListItem>
        ))}
      </List>
      <Heading size={'md'}>{typePlan}</Heading>
      <Stack>
        <Link href={href} target='_blank'>
        <Button
          size="md"
          color={useColorModeValue(colorTextLight, colorTextDark)}
          bgColor={useColorModeValue(bgColorLight, bgColorDark)}>
          Get Started
        </Button>
        </Link>
      </Stack>
    </Stack>
  )
}
const TierPricingHorizontal = () => {
  return (
    <Box py={6} px={5} width="full">
      <Stack spacing={4} width={'100%'} direction={'column'}>
        <Stack
          p={5}
          alignItems={'center'}
          justifyContent={{
            base: 'flex-start',
            md: 'space-around',
          }}
          direction={{
            base: 'column',
            md: 'row',
          }}>
          <Stack
            width={{
              base: '100%',
              md: '40%',
            }}
            textAlign={'center'}>
            <Heading size={'lg'}>
              The Right Plan <Text color="blue.400">For You</Text>
            </Heading>
          </Stack>
          <Stack
            width={{
              base: '100%',
              md: '60%',
            }}>
            <Text textAlign={'center'} textDecoration={"underline"} fontSize={"1.1em"}>
              $60 Joining Fee applies to all but the Daily Plan
            </Text>
          </Stack>
        </Stack>
        <Divider />
        <PackageTier title={'Daily Plan'} typePlan="$5.00/Day" options={dailyOptions} href='https://app.glofox.com/portal/#/branch/6605733b391ca3534f100002/memberships/661f17a076bbc112e70025c8/plan/1713313507165/buy'/>
        <Divider />
        <PackageTier title={'Month to Month'} typePlan="$45.00/Month" options={monthlyOptions} href='https://app.glofox.com/portal/#/branch/6605733b391ca3534f100002/memberships/661f2c5451e5e056650efe63/plan/1713313866581/buy'/>
        <Divider />
        <PackageTier title={'6 Month Plan'} typePlan="$40.00/Month" options={sixMonthContractOptions} href='https://app.glofox.com/portal/#/branch/6605733b391ca3534f100002/memberships/661f2c5451e5e056650efe63/plan/1713404377801/buy'/>
        <Divider />
        <PackageTier title={'12 Month Plan'} typePlan="$35.00/Month" options={yearLongContractOptions} href='https://app.glofox.com/portal/#/branch/6605733b391ca3534f100002/memberships/661f2c5451e5e056650efe63/plan/1713404560188/buy'/>
        <Divider/>
        <PackageTier title='Teacher Appreciation Plan' typePlan='$30.00/Month' options={teacherPlan} href='https://app.glofox.com/portal/#/branch/6605733b391ca3534f100002/memberships/661f2c5451e5e056650efe63/plan/1723931601893/buy'/>
      </Stack>
    </Box>
  )
}

export default TierPricingHorizontal;