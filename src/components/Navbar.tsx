"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
    Box,
    Drawer,
    IconButton,
    List,
    ListItem,
    Typography,
} from "@mui/material";
import { Close, Menu } from "@mui/icons-material";
import Image from "next/image"
import RGSLogo from "@/static/rgsLogo.png" 
import styles from "./navbar.module.scss"; // Assume you've created this CSS module

function Navbar() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const listItems = ["home", "about", "services", "blog", "contact-us"];

    return (
        <div className={styles.navWrapper}>
            <Box
                className={styles.logoBox}
                onClick={() => {
                    /* Handle logo click here if needed */
                }}
            >
                <Image src={RGSLogo} height={46} width={120} alt="RGS Roofing logo" />
            </Box>
            {/* Rest of your navbar code here, adapted to use Next.js Link */}
            <Box className={styles.flexNavs} sx={[{display: {xs: 'none', sm: 'flex'}}, {justifyContent: {xs: 'space-between'}}]}>
                <div className={styles.upperNav}>
                    <span className={styles.navEmail}>
                        <a href="mailto:rgsroofingservices@gmail.com">
                            rgsroofingservices@gmail.com
                        </a>
                    </span>
                    <span className={styles.navPhone}>
                        <a href="tel:01708 702 216">01708 702 216</a>
                    </span>
                </div>
                <div className={styles.lowerNav}>
                    <ul className={styles.navLinks}>
                        <li>
                            <Link href="/" className={styles.navLink}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/about" className={styles.navLink}>
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link href="/services" className={styles.navLink}>
                                Services
                            </Link>
                        </li>
                        <li>
                            <Link href="/blog" className={styles.navLink}>
                                Blog
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact-us" className={styles.navLink}>
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </Box>
            <Box className={styles.mobileNav} sx={{ display: { sm: "none" } }}>
                <IconButton
                    className={styles.menu}
                    onClick={() => setSidebarOpen(true)}
                >
                    <Menu className={styles.menuIcon} />
                </IconButton>

                <Drawer
                    disablePortal={true}
                    className={styles.drawer}
                    anchor={"right"}
                    open={sidebarOpen}
                    onClose={() => setSidebarOpen(false)}
                >
                    <IconButton
                        className={styles.close}
                        onClick={() => setSidebarOpen(false)}
                    >
                        <Close />
                    </IconButton>
                    <List className={styles.drawerList}>
                        {listItems.map((item, index) => (
                            <ListItem
                                key={index}
                                onClick={() => setSidebarOpen(false)}
                            >
                                <Link
                                    href={`/${item === "home" ? "" : item}`}
                                    passHref
                                >
                                    <Typography
                                        variant="h3"
                                        className={styles.link}
                                    >
                                        {item.replace("-", " ")}
                                    </Typography>
                                </Link>
                            </ListItem>
                        ))}
                    </List>
                </Drawer>
            </Box>
        </div>
    );
}

export default Navbar;
