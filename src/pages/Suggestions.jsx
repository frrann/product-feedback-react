import { useLogout } from '../features/authentication/useLogout';
import Suggestion from '../features/suggestions/Suggestion';

function Suggestions() {
  const { logout } = useLogout();

  const suggestions = [
    {
      id: 1,
      title: 'Add tags for solutions',
      category: 'enhancement',
      upvotes: 112,
      status: 'suggestion',
      description: 'Easier to search for solutions based on a specific stack.',
      comments: [
        {
          id: 1,
          content:
            'Awesome idea! Trying to find framework-specific projects within the hubs can be tedious',
          user: {
            image: './assets/user-images/image-suzanne.jpg',
            name: 'Suzanne Chang',
            username: 'upbeat1811',
          },
        },
        {
          id: 2,
          content:
            'Please use fun, color-coded labels to easily identify them at a glance',
          user: {
            image: './assets/user-images/image-thomas.jpg',
            name: 'Thomas Hood',
            username: 'brawnybrave',
          },
        },
      ],
    },
    {
      id: 2,
      title: 'Add a dark theme option',
      category: 'feature',
      upvotes: 99,
      status: 'suggestion',
      description:
        'It would help people with light sensitivities and who prefer dark mode.',
      comments: [
        {
          id: 3,
          content:
            'Also, please allow styles to be applied based on system preferences. I would love to be able to browse Frontend Mentor in the evening after my device’s dark mode turns on without the bright background it currently has.',
          user: {
            image: './assets/user-images/image-elijah.jpg',
            name: 'Elijah Moss',
            username: 'hexagon.bestagon',
          },
        },
        {
          id: 4,
          content:
            'Second this! I do a lot of late night coding and reading. Adding a dark theme can be great for preventing eye strain and the headaches that result. It’s also quite a trend with modern apps and  apparently saves battery life.',
          user: {
            image: './assets/user-images/image-james.jpg',
            name: 'James Skinner',
            username: 'hummingbird1',
          },
          replies: [
            {
              content:
                "While waiting for dark mode, there are browser extensions that will also do the job. Search for 'dark theme' followed by your browser. There might be a need to turn off the extension for sites with naturally black backgrounds though.",
              replyingTo: 'hummingbird1',
              user: {
                image: './assets/user-images/image-anne.jpg',
                name: 'Anne Valentine',
                username: 'annev1990',
              },
            },
            {
              content:
                "Good point! Using any kind of style extension is great and can be highly customizable, like the ability to change contrast and brightness. I'd prefer not to use one of such extensions, however, for security and privacy reasons.",
              replyingTo: 'annev1990',
              user: {
                image: './assets/user-images/image-ryan.jpg',
                name: 'Ryan Welles',
                username: 'voyager.344',
              },
            },
          ],
        },
      ],
    },
  ];

  return (
    <div className="grid h-max gap-4 overflow-hidden">
      {' '}
      {suggestions.map((item) => (
        <Suggestion item={item} />
      ))}
      {suggestions.map((item) => (
        <Suggestion item={item} />
      ))}
      {suggestions.map((item) => (
        <Suggestion item={item} />
      ))}
      {suggestions.map((item) => (
        <Suggestion item={item} />
      ))}
      {suggestions.map((item) => (
        <Suggestion item={item} />
      ))}
      {suggestions.map((item) => (
        <Suggestion item={item} />
      ))}
      {suggestions.map((item) => (
        <Suggestion item={item} />
      ))}
      {suggestions.map((item) => (
        <Suggestion item={item} />
      ))}
    </div>
    // <div className="h-max overflow-hidden rounded-lg bg-neutral-white md:mt-16 xl:mt-0">
    //   <h1>Suggestions</h1>

    //   {/* <button onClick={logout}>Logout</button> */}
    // </div>
  );
}

export default Suggestions;
