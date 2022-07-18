import React from "react";
import * as HiIcons from "react-icons/hi";
import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";
import * as GiIcons from "react-icons/gi";
import * as MdIcons from "react-icons/md";
import * as BiIcons from "react-icons/bi";
import * as RiIcons from "react-icons/ri";

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Client View',
        path: '/client-view',
        icon: <BsIcons.BsPersonBoundingBox />,
        cName: 'nav-text'
    },
    {
        title: 'Promoter View',
        path: '/promoter-view',
        icon: <HiIcons.HiSpeakerphone />,
        cName: 'nav-text'
    },
    {
        title: 'Payments',
        path: '/payments',
        icon: <GiIcons.GiWallet />,
        cName: 'nav-text'
    },
    {
        title: 'Settings',
        path: '/settings',
        icon: <MdIcons.MdOutlineSettings />,
        cName: 'nav-text'
    },
    {
        title: 'Help',
        path: '/help',
        icon: <BiIcons.BiHelpCircle />,
        cName: 'nav-text'
    },
    {
        title: 'Feedback',
        path: '/feedback',
        icon: <MdIcons.MdFeedback />,
        cName: 'nav-text'
    },
    {
        title: 'Log out',
        path: '/log-out',
        icon: <RiIcons.RiLogoutCircleLine />,
        cName: 'nav-text'
    },
]