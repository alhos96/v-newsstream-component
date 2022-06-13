import Comment from "../components/Comment";

export default {
  component: Comment,
  title: "Comment",
};

const Template = (args) => <Comment {...args} />;

export const Default = Template.bind({});

Default.args = {
  username: "Irma Petrić",
  avatar: "https://icon-library.com/images/icon-avatar/icon-avatar-6.jpg",
  date: "07.06.2022 08:45",
  commentText:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditis a impedit dolore eum nesciunt inventore amet deserunt quidem nisi molestias?",
};

export const LongComment = Template.bind({});

LongComment.args = {
  ...Default.args,
  commentText:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditis a impedit dolore eum nesciunt inventore amet deserunt quidem nisi molestias? Lorem ipsum dolor sit amet consectetur adipisicing elit.  Blanditiis a impedit dolore eum nesciunt inventore amet deserunt quidem nisi molestias? Lorem ipsum dolor  sit amet consectetur adipisicing elit. Blanditiis a impedit dolore eum nesciunt inventore amet deserunt quidem nisi molestias? Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis a impedit dolore eum nesciunt inventore amet deserunt quidem nisi molestias?",
};
