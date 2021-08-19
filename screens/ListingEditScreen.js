import React from 'react';
import {StyleSheet} from 'react-native';
import * as Yup from 'yup';

import AppForm from '../components/AppForm';
import AppFormField from '../components/AppFormField';
import AppPicker from '../components/AppPicker.js';
import SubmitButton from '../components/SubmitButton';
import Screen from '../components/Screen';
import CategoryPickerItem from '../components/CategoryPickerItem';
import AppImageFormPicker from '../components/AppImageFormPicker/AppImageFormPicker';

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label('Title'),
  price: Yup.number().required().min(1).max(10000).label('Price'),
  description: Yup.string().label('Description'),
  category: Yup.object().required().nullable().label('Category'),
  images: Yup.array().min(1, 'Please select atleast one image.'),
});

const categories = [
  {label: 'Furniture', value: 1, backgroundColor: 'red', icon: 'paper-plane'},
  {label: 'Clothing', value: 2, backgroundColor: 'green', icon: 'paper-plane'},
  {label: 'Camera', value: 3, backgroundColor: 'blue', icon: 'paper-plane'},
];

function ListingEditScreen() {
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{
          title: '',
          price: '',
          description: '',
          category: null,
          images: [],
        }}
        onSubmit={values => console.log(values)}
        validationSchema={validationSchema}>
        <AppImageFormPicker name="images" />
        <AppFormField maxLength={255} name="title" placeholder="Title" />
        <AppFormField
          keyboardType="numeric"
          maxLength={8}
          name="price"
          placeholder="Price"
          width={120}
        />
        <AppPicker
          items={categories}
          name="category"
          numberOfColumns={3}
          placeholder="Category"
          PickerItemComponent={CategoryPickerItem}
          width="50%"
        />
        <AppFormField
          maxLength={255}
          multiline
          name="description"
          numberOfLines={3}
          placeholder="Description"
        />
        <SubmitButton title="Post" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
export default ListingEditScreen;
