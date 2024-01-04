import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';

import Button from '../../ui/Button';
import Card from '../../ui/Card';
import Input from '../../ui/Input';
import Dropdown from '../../ui/Dropdown';
import Textarea from '../../ui/Textarea';

import ArrowBack from '../../assets/icon-arrow-back-blue.svg';
import Plus from '../../assets/icon-new-feedback.svg';

import { useMoveBack } from '../../hooks/useMoveBack';

function SuggestionForm() {
  const moveBack = useMoveBack();

  const [category, setCategory] = useState({
    value: 'feature',
    text: 'Feature',
  });

  const {
    register,
    setValue,
    resetField,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    const newSuggestion = {
      ...data,
      category: category.value,
      upvotes: 0,
      status: 'suggestion',
    };
    console.log(newSuggestion);
  }

  useEffect(() => {
    register('title', { required: "Can't be empty" });
    register('description', { required: "Can't be empty" });
  }, [register, resetField]);

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
            className="absolute bottom-1 w-10 md:bottom-0 md:w-14"
          />
        </div>
        <h3 className="text-blue-midnight md:text-2xl">Create New Feedback</h3>
        <form className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label
              htmlFor="title"
              className="custom-body-3 font-bold text-blue-midnight md:text-sm"
            >
              Feedback Title
            </label>
            <p className="custom-body-3 font-normal text-neutral-grey md:text-sm">
              Add a short, descriptive headline
            </p>
            <Input
              id="title"
              aria-invalid={errors.title?.message !== undefined}
              aria-describedby="titleErr"
              onChange={(e) => setValue('title', e.target.value)}
            />
            {errors.title && (
              <span id="titleErr" className="text-xs text-red">
                {errors.title.message}
              </span>
            )}
          </div>
          <div>
            <label
              htmlFor="category"
              className="custom-body-3 font-bold text-blue-midnight md:text-sm"
            >
              Category
            </label>
            <p className="custom-body-3 font-normal text-neutral-grey md:text-sm">
              Choose a category for your feedback
            </p>
            <Dropdown
              name="categories"
              items={[
                { id: 1, value: 'feature', text: 'Feature' },
                { id: 2, value: 'ui', text: 'UI' },
                { id: 3, value: 'ux', text: 'UX' },
                { id: 4, value: 'enhancement', text: 'Enhancement' },
                { id: 5, value: 'bug', text: 'Bug' },
              ]}
              id="category"
              onChange={setCategory}
            />
          </div>
          <div>
            <label
              htmlFor="description"
              className="custom-body-3 font-bold text-blue-midnight md:text-sm"
            >
              Feedback detail
            </label>
            <p className="custom-body-3 font-normal text-neutral-grey md:text-sm">
              Include any specific comments on what should be improved, added,
              etc.
            </p>
            <Textarea
              id="description"
              aria-invalid={errors.description?.message !== undefined}
              aria-describedby="descErr"
              onChange={(e) => setValue('description', e.target.value)}
            />
            {errors.description && (
              <span id="descErr" className="text-xs text-red">
                {errors.description.message}
              </span>
            )}
          </div>
          <div className="flex flex-col pt-2 md:flex-row md:justify-end md:gap-4">
            <div className="order-1 w-full md:order-2 md:w-36">
              <Button size="large" type="submit">
                Add Feedback
              </Button>
            </div>
            <div className="order-2 w-full md:order-1 md:w-[93px]">
              <Button
                color="midnight"
                size="large"
                type="button"
                onClick={moveBack}
              >
                Cancel
              </Button>
            </div>
          </div>
        </form>
      </Card>
    </div>
  );
}

export default SuggestionForm;
