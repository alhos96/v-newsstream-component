import ArticleBar from "../components/ArticleBar.jsx";

export default {
  component: ArticleBar,
  title: "ArticleBar",
};

const Template = (args) => <ArticleBar {...args} />;

export const Default = Template.bind({});

Default.args = {
  username: "Alija Hodzic",
  avatar:
    "https://mir-s3-cdn-cf.behance.net/project_modules/disp/ea7a3c32163929.567197ac70bda.png",
  date: "07.06.2022 07:30",
  timePosted: "...",
};

export const LessThanAnHourAgo = Template.bind({});

LessThanAnHourAgo.args = {
  ...Default.args,
  timePosted: "2 min ago",
};

export const LessThanADayAgo = Template.bind({});

LessThanADayAgo.args = {
  ...Default.args,
  timePosted: "15 hours ago",
};
