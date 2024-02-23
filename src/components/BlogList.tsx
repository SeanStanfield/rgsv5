import React from "react";
import {
    Avatar,
    Card,
    CardContent,
    CardMedia,
    Container,
    IconButton,
    Stack,
    Typography,
} from "@mui/material";
import { ChevronRight } from "@mui/icons-material";
import Link from "next/link";
import styles from "./BlogList.module.scss"; // Create and import BlogList.module.scss

export type TBlogPost = {
    title: string;
    slug: string;
    image: string;
    author: string;
    publishedAt: string;
    introduction: string;
};

const BlogList = ({ blogPosts }: { blogPosts: TBlogPost[] }) => {

    return (
        <div className={styles.container}>
            <Container>
                <Container className={styles.container}>
                    {blogPosts.map((post, index) => (
                        <Card className={styles.card} key={index}>
                            <CardMedia
                                component="img"
                                className={styles.cardMedia}
                                image={post?.image ?? ""}
                                title={post.title}
                            />
                            <CardContent className={styles.cardContent}>
                                <Typography
                                    variant="h3"
                                    className={styles.fullWidth}
                                >
                                    {post.title}
                                </Typography>
                                <Typography
                                    variant="body1"
                                    className={styles.fullWidth}
                                >
                                    {post.introduction}
                                </Typography>

                                <Stack className={styles.cardContentPublish}>
                                    {/* <Typography
                                        variant="subtitle1"
                                        color="text.secondary"
                                        component="p"
                                    >
                                        {
                                            post.author
                                        }
                                    </Typography> */}
                                    {!!post.publishedAt && (
                                        <Typography
                                            variant="subtitle2"
                                            color="text.secondary"
                                            component="p"
                                        >
                                            {"Published: " +
                                                new Date(
                                                    post.publishedAt
                                                ).toLocaleDateString()}
                                        </Typography>
                                    )}
                                    <Link
                                        href={`/blog/${post.slug}`}
                                        passHref
                                    >
                                        <IconButton
                                            color="primary"
                                            aria-label={`Navigate to ${post.title}`}
                                        >
                                            <ChevronRight />
                                        </IconButton>
                                    </Link>
                                </Stack>
                            </CardContent>
                        </Card>
                    ))}
                </Container>
            </Container>
        </div>
    );
};

export default BlogList;
