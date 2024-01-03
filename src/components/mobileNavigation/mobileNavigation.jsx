import React, { useState } from 'react';
import './mobileNavigation.scss'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    ChakraProvider,
    useDisclosure
} from '@chakra-ui/react'
import Navigation from '../navigation/Navigation';

const MobileNavigation = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <aside className='mobile_drawer' onClick={onOpen}>
            <ChakraProvider>
                <button className='mobile_drawer-btn' onClick={onOpen}>
                    <span/>
                    <span/>
                    <span/>
                </button>
                <Drawer
                    isOpen={isOpen}
                    placement='left'
                    onClose={onClose}
                >
                    <DrawerOverlay />
                    <DrawerContent>
                        <DrawerCloseButton className='mobile_drawer-close-btn'/>

                        <DrawerBody>
                            <Navigation/>
                        </DrawerBody>

                        <DrawerFooter>

                        </DrawerFooter>
                    </DrawerContent>
                </Drawer>

            </ChakraProvider>
        </aside>
    );
};

export default MobileNavigation;