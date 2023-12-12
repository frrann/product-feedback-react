import Button from '../../ui/Button';
import Card from '../../ui/Card';
import Input from '../../ui/Input';

import ArrowBack from '../../assets/icon-arrow-back-blue.svg';
import Plus from '../../assets/icon-new-feedback.svg';

import { useMoveBack } from '../../hooks/useMoveBack';

function SuggestionForm() {
  const moveBack = useMoveBack();

  return (
    <div className="flex h-screen flex-col gap-14 p-6 md:px-28 md:py-14 lg:mx-auto lg:h-fit lg:w-[540px] lg:px-0 lg:py-20">
      <div className="flex items-center justify-between">
        <Button
          variant="secondary"
          color="transparent"
          size="auto"
          onClick={moveBack}
        >
          <img src={ArrowBack} alt="Arrow back" />
          Go Back
        </Button>
      </div>
      <Card className="gap-6">
        <div className="relative">
          <img
            src={Plus}
            alt="Add new feedback"
            className="absolute bottom-1"
            width={40}
            height={40}
          />
        </div>
        <h3 className="md:text-2xl">Create New Feedback</h3>
        <form className="flex flex-col gap-6">
          <div>
            <label
              htmlFor="title"
              className="custom-body-3 font-bold md:text-sm"
            >
              Feedback Title
            </label>
            <p className="custom-body-3 font-normal md:text-sm">
              Add a short, descriptive headline
            </p>
            <Input id="title" />
          </div>
          <div>
            <label
              htmlFor="category"
              className="custom-body-3 font-bold md:text-sm"
            >
              Category
            </label>
            <p className="custom-body-3 font-normal md:text-sm">
              Choose a category for your feedback
            </p>
            <Input id="category" />
          </div>
          <div>
            <label id="detail" className="custom-body-3 font-bold md:text-sm">
              Feedback detail
            </label>
            <p className="custom-body-3 font-normal md:text-sm">
              Include any specific comments on what should be improved, added,
              etc.
            </p>
            <Input id="detail" />
          </div>
          <div className="flex flex-col pt-2 md:flex-row">
            <Button size="large" type="submit">
              Add Feedback
            </Button>
            <Button
              color="midnight"
              size="large"
              type="button"
              onClick={moveBack}
            >
              Cancel
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
}

export default SuggestionForm;
