import React, { useState } from 'react';
import { Flex, View } from '@adobe/react-spectrum';
import { Link } from '@adobe/react-spectrum';
import { Link as RouterLink } from 'react-router-dom';


const Aside = () => {

  return (
    <Flex rowGap={'size-100'} direction='column' marginTop={'size-200'} marginX={'size-200'}>
      <View><Link isQuiet variant='primary'><RouterLink to="/">Home</RouterLink></Link></View>

      <MasterMenu title={'ID Card'}>

        <Flex direction={'column'} rowGap='size-100'>
          <View>
            <Link isQuiet variant='primary'>
              <RouterLink to="/toko-sentra">Toko Sentra</RouterLink>
            </Link>
          </View>
        </Flex>
      </MasterMenu>

    </Flex>
  )
}

type MasterMenuProps = {
  title: String
  children: React.ReactNode
}
function MasterMenu(props: MasterMenuProps) {
  const { title, children } = props;
  const [show, setShow] = useState<Boolean>(false);


  return (
    <div>
      <View UNSAFE_className='font-bold'>
        <Link variant='secondary' onPress={() => setShow(!show)}>{title}</Link>
      </View>

      {show && <View marginTop={'size-150'} marginX={'size-200'}>{children}</View>}
    </div>
  )

}

export default Aside;