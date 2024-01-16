import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import Button from '../../ui/Button';
import Card from '../../ui/Card';
import Input from '../../ui/Input';
import Dropdown from '../../ui/Dropdown';
import Textarea from '../../ui/Textarea';
import SpinnerLarge from '../../ui/SpinnerLarge';

import ArrowBack from '../../assets/icon-arrow-back-blue.svg';
import Plus from '../../assets/icon-new-feedback.svg';
import Pen from '../../assets/icon-edit-feedback.svg';

import { useMoveBack } from '../../hooks/useMoveBack';
import { useCreateSuggestion } from './useCreateSuggestion';
import { useEditSuggestion } from './useEditSuggestion';
import { useDeleteSuggestion } from './useDeleteSuggestion';
import { useUser } from '../authentication/useUser';
import { CATEGORIES, STATUS_OPTIONS } from '../../constants';

function SuggestionForm({ suggestionToEdit = {} }) {
  const { id: editId } = suggestionToEdit;
  const isEditSession = Boolean(editId);

  const moveBack = useMoveBack();
  const navigate = useNavigate();

  const { createSuggestion, isLoading: isCreating } = useCreateSuggestion();
  const { editSuggestion, isLoading: isEditing } = useEditSuggestion();
  const { deleteSuggestion, isLoading: isDeleting } = useDeleteSuggestion();
  const { user, isLoading: isUserLoading } = useUser();

  const initialCategory = isEditSession
    ? CATEGORIES.find(
        (category) => category.value === suggestionToEdit?.category,
      )
    : {
        id: 0,
        value: 'feature',
        text: 'Feature',
      };

  const initialStatus = isEditSession
    ? STATUS_OPTIONS.find((status) => status.value === suggestionToEdit?.status)
    : {
        id: 0,
        value: 'suggestion',
        text: 'Suggestion',
      };

  const [category, setCategory] = useState(initialCategory);
  const [status, setStatus] = useState(initialStatus);

  const {
    register,
    setValue,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    register('title', { required: "Can't be empty" });
    register('description', { required: "Can't be empty" });
  }, [register]);

  useEffect(() => {
    if (isEditSession) {
      setValue('title', suggestionToEdit?.title);
      setValue('description', suggestionToEdit?.description);
    }
  }, [isEditSession, setValue, suggestionToEdit]);

  function onSubmit(data) {
    if (isEditSession)
      editSuggestion(
        {
          newSuggestionData: {
            ...data,
            category: category.value,
            status: status.value,
          },
          id: editId,
        },
        {
          onSuccess: () => {
            reset();
            navigate('/');
          },
        },
      );
    else
      createSuggestion(
        {
          ...data,
          user_id: user.id,
          category: category.value,
          upvotes: 0,
          status: status.value,
        },
        {
          onSuccess: () => {
            reset();
            navigate('/');
          },
        },
      );
  }

  if (isUserLoading || isCreating || isEditing || isDeleting)
    return <SpinnerLarge />;

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
            src={isEditSession ? Pen : Plus}
            alt={isEditSession ? 'Edit feedback' : 'Add new feedback'}
            className="absolute bottom-1 w-10 md:bottom-0 md:w-14"
          />
        </div>
        <h3
          className={`text-blue-midnight md:text-2xl ${
            isEditSession ? 'md:mb-12' : 'md:mb-4'
          }`}
        >
          {isEditSession
            ? `Editing '${suggestionToEdit.title}'`
            : 'Create New Feedback'}
        </h3>

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
              key="title"
              aria-invalid={errors.title?.message !== undefined}
              aria-describedby="titleErr"
              onChange={(e) => setValue('title', e.target.value)}
              defaultValue={suggestionToEdit?.title}
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
              items={CATEGORIES}
              id="category"
              onChange={setCategory}
              defaultValue={CATEGORIES.find(
                (category) => category.value === suggestionToEdit?.category,
              )}
            />
          </div>
          {isEditSession && (
            <div>
              <label
                htmlFor="status"
                className="custom-body-3 font-bold text-blue-midnight md:text-sm"
              >
                Update Status
              </label>
              <p className="custom-body-3 font-normal text-neutral-grey md:text-sm">
                Change feature state
              </p>
              <Dropdown
                name="categories"
                items={STATUS_OPTIONS}
                id="status"
                onChange={setStatus}
                defaultValue={STATUS_OPTIONS.find(
                  (status) => status.value === suggestionToEdit?.status,
                )}
              />
            </div>
          )}
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
              key="description"
              aria-invalid={errors.description?.message !== undefined}
              aria-describedby="descErr"
              onChange={(e) => setValue('description', e.target.value)}
              defaultValue={suggestionToEdit?.description}
            />
            {errors.description && (
              <span id="descErr" className="text-xs text-red">
                {errors.description.message}
              </span>
            )}
          </div>
          <div className="flex flex-col items-center pt-2 md:flex-row md:justify-between md:gap-4">
            {isEditSession && (
              <div className="order-2 w-full md:order-1 md:w-[93px]">
                <Button
                  size="large"
                  type="button"
                  color="red"
                  onClick={() =>
                    deleteSuggestion(suggestionToEdit?.id, {
                      onSuccess: () => navigate('/'),
                    })
                  }
                >
                  Delete
                </Button>
              </div>
            )}
            <div className="order-1 flex w-full flex-col md:order-2 md:flex-row md:justify-end md:gap-4">
              <div className="order-1 w-full md:order-3 md:w-36">
                <Button size="large" type="submit">
                  {isEditSession ? 'Save Changes' : 'Add Feedback'}
                </Button>
              </div>
              <div className="order-2 w-full md:order-2 md:w-[93px]">
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
          </div>
        </form>
      </Card>
    </div>
  );
}

export default SuggestionForm;
