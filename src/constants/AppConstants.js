/*
 * AppConstants
 * These are the variables that determine what our central data store (reducer.js)
 * changes in our state. When you add a new action, you have to add a new constant here
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'YOUR_ACTION_CONSTANT';
 */
export const CHANGE_FORM = 'CHANGE_FORM';
export const SET_AUTH = 'SET_AUTH';
export const SENDING_REQUEST = 'SENDING_REQUEST';
export const SET_ERROR_MESSAGE = 'SET_ERROR_MESSAGE';
export const CATEGORIES = [
	{	title: 'Culture', slug: 'culture' },
	{	title: 'Music', slug: 'music' },
	{	title: 'News', slug: 'news' },
	{	title: 'Design', slug: 'design' },
	{	title: 'Fashion', slug: 'fashion' },
	{	title: 'Arts', slug: 'arts' },
	{	title: 'Sports', slug: 'sports' },
	{	title: 'Food', slug: 'food' },
	]